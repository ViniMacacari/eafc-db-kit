param(
  [Parameter(Mandatory = $true)][string]$DatabasePath,
  [Parameter(Mandatory = $true)][string]$XmlPath,
  [Parameter(Mandatory = $true)][string]$AssemblyPath,
  [string]$OutputPath
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
[void][System.Reflection.Assembly]::LoadFrom($AssemblyPath)
if ($OutputPath) {
  if (Test-Path -LiteralPath $OutputPath) { throw 'The reference output must not already exist.' }
  [System.IO.File]::Copy($DatabasePath, $OutputPath)
  $DatabasePath = $OutputPath
}
$database = New-Object FifaLibrary.DbFile($DatabasePath, $XmlPath)
$dataSet = $database.ConvertToDataSet()
$tables = @()

foreach ($table in $dataSet.Tables) {
  $samples = @()
  if ($table.Rows.Count -gt 0) {
    foreach ($rowIndex in @(0, ($table.Rows.Count - 1))) {
      $sample = [ordered]@{}
      foreach ($column in $table.Columns) {
        $value = $table.Rows[$rowIndex][$column]
        if ($value -is [DBNull]) { $value = $null }
        elseif ($value -is [single]) {
          if ([single]::IsNaN($value) -or [single]::IsInfinity($value)) { $value = $null }
          else { $value = [double]$value }
        }
        $sample[$column.ColumnName] = $value
      }
      $samples += ,$sample
    }
  }
  $tables += [ordered]@{ name = $table.TableName; records = $table.Rows.Count; samples = $samples }
}

if ($OutputPath) {
  if (-not $database.SaveDb()) { throw 'The C# reference could not write the output database.' }
}

ConvertTo-Json -InputObject ([ordered]@{ tables = $tables }) -Depth 8 -Compress
