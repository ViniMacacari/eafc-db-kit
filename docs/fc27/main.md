# FC 27 main: tables and fields

Generated from `templates/FC 27/fifa_ng_db-meta.xml` with `npm run generate:fc27`. Do not edit this catalog by hand.

268 tables and 9,263 fields. See the [typed API guide](../fc27-types.md) for imports and examples.

Record type: `Fc27Record<'table-name', 'main'>`. Field names retain the XML spelling and case.

| Table | Binary code | Fields |
| --- | --- | ---: |
| [`AudioDeactivatedStories`](#audiodeactivatedstories) | `ltHX` | 5 |
| [`BigAttendance`](#bigattendance) | `kcnb` | 3 |
| [`CustomizableAnthemChant`](#customizableanthemchant) | `ULVc` | 5 |
| [`CustomizableChantPackage`](#customizablechantpackage) | `hhCa` | 5 |
| [`CustomizableGoalMusic`](#customizablegoalmusic) | `cYAU` | 5 |
| [`CustomizableTeamName`](#customizableteamname) | `Ogiv` | 5 |
| [`MatchIntensity`](#matchintensity) | `GZKc` | 8 |
| [`NoAttendance`](#noattendance) | `zuHF` | 3 |
| [`SMPlayerCallLang`](#smplayercalllang) | `nnLI` | 2 |
| [`accessories`](#accessories) | `RMfq` | 3 |
| [`activity_config`](#activity_config) | `Txvi` | 29 |
| [`adboardconsoleoverrides`](#adboardconsoleoverrides) | `OSkO` | 8 |
| [`adboardlogicexceptions`](#adboardlogicexceptions) | `zIOu` | 11 |
| [`agents`](#agents) | `eqXx` | 35 |
| [`archetypes`](#archetypes) | `UPmi` | 4 |
| [`associatedplayers`](#associatedplayers) | `eDZz` | 2 |
| [`associateplayerspec`](#associateplayerspec) | `HAuy` | 2 |
| [`attribute_strengths`](#attribute_strengths) | `YxHb` | 4 |
| [`attributecategorymap`](#attributecategorymap) | `yDnI` | 4 |
| [`attributeprefpositionformula`](#attributeprefpositionformula) | `jhTx` | 3 |
| [`audionation`](#audionation) | `Mmou` | 12 |
| [`audiostadium`](#audiostadium) | `Jpfv` | 4 |
| [`bannerplayers`](#bannerplayers) | `nhky` | 7 |
| [`basehead_fat`](#basehead_fat) | `AXbo` | 185 |
| [`basehead_flesh`](#basehead_flesh) | `eqqo` | 233 |
| [`basehead_skeletal`](#basehead_skeletal) | `luAI` | 233 |
| [`bigmatchups`](#bigmatchups) | `IosO` | 2 |
| [`brandpartnerassets`](#brandpartnerassets) | `xuka` | 8 |
| [`brandpartners`](#brandpartners) | `HeDf` | 4 |
| [`brandtypes`](#brandtypes) | `VZEn` | 4 |
| [`broadcastleague`](#broadcastleague) | `idNB` | 4 |
| [`career_birthingpool`](#career_birthingpool) | `Zswx` | 18 |
| [`career_calendar`](#career_calendar) | `GJUr` | 10 |
| [`career_clinchedobjectives`](#career_clinchedobjectives) | `wzLs` | 5 |
| [`career_commonnames`](#career_commonnames) | `NtND` | 6 |
| [`career_createplayerattributes`](#career_createplayerattributes) | `ohco` | 40 |
| [`career_firstnames`](#career_firstnames) | `sYnV` | 5 |
| [`career_lastnames`](#career_lastnames) | `vInR` | 5 |
| [`career_managerawards`](#career_managerawards) | `ShPa` | 6 |
| [`career_playerawards`](#career_playerawards) | `cPet` | 6 |
| [`career_playergrowthuserseason`](#career_playergrowthuserseason) | `DyYs` | 37 |
| [`career_playermatchratinghistory`](#career_playermatchratinghistory) | `TtHG` | 6 |
| [`career_regenplayerattributes`](#career_regenplayerattributes) | `rJnj` | 37 |
| [`career_scoutmission`](#career_scoutmission) | `apoo` | 15 |
| [`career_scouts`](#career_scouts) | `zlrC` | 8 |
| [`career_teamofweek`](#career_teamofweek) | `pygX` | 5 |
| [`career_youth_skins`](#career_youth_skins) | `bFKF` | 105 |
| [`career_youthplayerhistory`](#career_youthplayerhistory) | `TcEm` | 3 |
| [`career_youthplayerposattributes`](#career_youthplayerposattributes) | `aREe` | 37 |
| [`career_youthplayers`](#career_youthplayers) | `IOmq` | 5 |
| [`celebrations`](#celebrations) | `NspG` | 1 |
| [`clubcoefficients`](#clubcoefficients) | `fggG` | 7 |
| [`clubcommentarynames`](#clubcommentarynames) | `oqeq` | 2 |
| [`clubcustomization_asset`](#clubcustomization_asset) | `jyKl` | 9 |
| [`clubcustomization_bundle`](#clubcustomization_bundle) | `DdMn` | 12 |
| [`clubcustomization_cardeffects`](#clubcustomization_cardeffects) | `IxJA` | 4 |
| [`clubcustomization_facilitycards`](#clubcustomization_facilitycards) | `NRkp` | 5 |
| [`clubcustomization_kit`](#clubcustomization_kit) | `EInh` | 2 |
| [`clubcustomization_stadium`](#clubcustomization_stadium) | `XhKr` | 4 |
| [`clubcustomization_tifo`](#clubcustomization_tifo) | `iZmr` | 4 |
| [`clubcustomization_trophy`](#clubcustomization_trophy) | `ngsH` | 2 |
| [`cm_attr_upgrade_cost_curve_map`](#cm_attr_upgrade_cost_curve_map) | `WqKr` | 4 |
| [`cm_attribute_upgrade_cost`](#cm_attribute_upgrade_cost) | `Kgqz` | 4 |
| [`cm_default_mentalities`](#cm_default_mentalities) | `UWjr` | 62 |
| [`cm_level_curve`](#cm_level_curve) | `HUWo` | 2 |
| [`cm_level_curve_progress`](#cm_level_curve_progress) | `iQRc` | 6 |
| [`cm_mentalities`](#cm_mentalities) | `emmj` | 68 |
| [`cm_min_max_attributes`](#cm_min_max_attributes) | `URiy` | 6 |
| [`cm_role_synergies`](#cm_role_synergies) | `tODa` | 6 |
| [`cm_specialization_attribute_req`](#cm_specialization_attribute_req) | `HHEc` | 4 |
| [`cm_teamsheets`](#cm_teamsheets) | `zdMM` | 83 |
| [`cmplayers`](#cmplayers) | `bqIi` | 162 |
| [`commentarynames`](#commentarynames) | `PrWZ` | 4 |
| [`competition`](#competition) | `FMpz` | 99 |
| [`competitionbadges`](#competitionbadges) | `Qxjv` | 6 |
| [`competitionballs`](#competitionballs) | `SWFH` | 4 |
| [`competitionkits`](#competitionkits) | `brHl` | 37 |
| [`competitionmatchups`](#competitionmatchups) | `VHaB` | 5 |
| [`competitionrefereekits`](#competitionrefereekits) | `MsTi` | 2 |
| [`competitionseeds`](#competitionseeds) | `fMpR` | 5 |
| [`competitionsponsorlinks`](#competitionsponsorlinks) | `AqBt` | 5 |
| [`competitionstadiumlinks`](#competitionstadiumlinks) | `nVuT` | 3 |
| [`competitionuefasponsors`](#competitionuefasponsors) | `qmil` | 4 |
| [`cp_fat`](#cp_fat) | `dMwM` | 185 |
| [`cp_flesh`](#cp_flesh) | `qsGz` | 233 |
| [`cp_skeletal`](#cp_skeletal) | `Hrbq` | 233 |
| [`createplayer`](#createplayer) | `SPTx` | 16 |
| [`createplayerpositiontemplates`](#createplayerpositiontemplates) | `Flrt` | 3 |
| [`createplayerpresets`](#createplayerpresets) | `lNVH` | 65 |
| [`createplayerpresets_link`](#createplayerpresets_link) | `TMTO` | 2 |
| [`createplayerviews`](#createplayerviews) | `nJco` | 2 |
| [`crowdaccessories`](#crowdaccessories) | `AUCA` | 9 |
| [`crowdbodies`](#crowdbodies) | `OjyS` | 11 |
| [`crowdhairs`](#crowdhairs) | `velI` | 10 |
| [`crowdheads`](#crowdheads) | `qvyg` | 10 |
| [`crowdoldsystem`](#crowdoldsystem) | `VhQO` | 16 |
| [`crowdprops`](#crowdprops) | `LNfG` | 4 |
| [`crowdregion`](#crowdregion) | `Edjp` | 3 |
| [`crowdregionlrc`](#crowdregionlrc) | `RJzi` | 14 |
| [`crowdtints`](#crowdtints) | `grmf` | 8 |
| [`customcoloredsmoke`](#customcoloredsmoke) | `KVdl` | 4 |
| [`customformations`](#customformations) | `pRBh` | 54 |
| [`customteamstyles`](#customteamstyles) | `WpTz` | 14 |
| [`dbversion`](#dbversion) | `LJXi` | 2 |
| [`dc_fat`](#dc_fat) | `zFhW` | 185 |
| [`dc_flesh`](#dc_flesh) | `GPlh` | 233 |
| [`dc_skeletal`](#dc_skeletal) | `uxUO` | 233 |
| [`dc_skins`](#dc_skins) | `LXlu` | 105 |
| [`dcplayernames`](#dcplayernames) | `bneD` | 2 |
| [`deactivatedstories`](#deactivatedstories) | `aDsH` | 3 |
| [`default_mentalities`](#default_mentalities) | `ONtg` | 63 |
| [`default_teamsheets`](#default_teamsheets) | `AGmV` | 67 |
| [`defaultteamdata`](#defaultteamdata) | `GOVn` | 36 |
| [`dlcballs`](#dlcballs) | `jfBw` | 2 |
| [`dlcboots`](#dlcboots) | `rFEr` | 2 |
| [`dynamicimages`](#dynamicimages) | `ubBA` | 3 |
| [`editedplayernames`](#editedplayernames) | `nQVU` | 5 |
| [`emotelink`](#emotelink) | `wtgX` | 4 |
| [`factory_teams`](#factory_teams) | `xIfB` | 60 |
| [`fieldpositionboundingboxes`](#fieldpositionboundingboxes) | `MdTF` | 9 |
| [`fifaGameSettings`](#fifagamesettings) | `IUAL` | 10 |
| [`fixtures`](#fixtures) | `Vmkr` | 15 |
| [`footwear`](#footwear) | `IePu` | 2 |
| [`formationoffsets`](#formationoffsets) | `mRIW` | 23 |
| [`formations`](#formations) | `mDGw` | 54 |
| [`ftue_presets`](#ftue_presets) | `HlAR` | 41 |
| [`gameplay_site_config`](#gameplay_site_config) | `qSZJ` | 10 |
| [`genericmascot`](#genericmascot) | `Daxn` | 10 |
| [`goalcelebrationlink`](#goalcelebrationlink) | `xizF` | 2 |
| [`goalkeepergloves`](#goalkeepergloves) | `ezDT` | 4 |
| [`gp_ucc`](#gp_ucc) | `xgkO` | 4 |
| [`height_weight_impact`](#height_weight_impact) | `LkKs` | 4 |
| [`height_weight_impact_range`](#height_weight_impact_range) | `MUQV` | 4 |
| [`highres_fat`](#highres_fat) | `CouJ` | 185 |
| [`highres_flesh`](#highres_flesh) | `lhoa` | 233 |
| [`highres_skeletal`](#highres_skeletal) | `iXwV` | 233 |
| [`highres_skins`](#highres_skins) | `gtgp` | 105 |
| [`highresasset`](#highresasset) | `gzqh` | 31 |
| [`kickabout_tests_gameplay_sites`](#kickabout_tests_gameplay_sites) | `EoJv` | 4 |
| [`kitcoloroverrides`](#kitcoloroverrides) | `CwpD` | 16 |
| [`kitremapping`](#kitremapping) | `IDEX` | 8 |
| [`kitrewardsmapping`](#kitrewardsmapping) | `Odrk` | 2 |
| [`leaguerefereelinks`](#leaguerefereelinks) | `tfLS` | 2 |
| [`leagues`](#leagues) | `onMQ` | 13 |
| [`leagueteamlinks`](#leagueteamlinks) | `qdZF` | 34 |
| [`level_caps`](#level_caps) | `xaoU` | 4 |
| [`linecolor`](#linecolor) | `sLLc` | 11 |
| [`lowresasset`](#lowresasset) | `DJmp` | 7 |
| [`main_world_gameplay_sites`](#main_world_gameplay_sites) | `sSLL` | 4 |
| [`manager`](#manager) | `Knen` | 52 |
| [`mascot`](#mascot) | `YgjD` | 12 |
| [`matchscenarios`](#matchscenarios) | `MryP` | 19 |
| [`mentalities`](#mentalities) | `PkkJ` | 76 |
| [`mls_group_structure`](#mls_group_structure) | `hCEv` | 2 |
| [`modeadboardlinks`](#modeadboardlinks) | `YBgI` | 5 |
| [`multiclubownership`](#multiclubownership) | `HAqY` | 4 |
| [`nationcoefficients`](#nationcoefficients) | `sCDs` | 8 |
| [`nations`](#nations) | `Crbb` | 8 |
| [`netpattern`](#netpattern) | `ONDL` | 4 |
| [`outfitarrangements`](#outfitarrangements) | `Zeam` | 42 |
| [`outfithairlinks`](#outfithairlinks) | `QqjW` | 2 |
| [`perks`](#perks) | `AolY` | 3 |
| [`persistent_events`](#persistent_events) | `gCOv` | 8 |
| [`player_grudgelove`](#player_grudgelove) | `DFeB` | 3 |
| [`playerarchetypelinks`](#playerarchetypelinks) | `dRCR` | 20 |
| [`playerbodyrestrictions`](#playerbodyrestrictions) | `ijbM` | 2 |
| [`playerbootremapping`](#playerbootremapping) | `yYtg` | 2 |
| [`playerboots`](#playerboots) | `cQNG` | 16 |
| [`playercalls`](#playercalls) | `NyRh` | 3 |
| [`playerformdiff`](#playerformdiff) | `UlaA` | 5 |
| [`playerloans`](#playerloans) | `ZrAO` | 5 |
| [`playernamemap`](#playernamemap) | `VGQZ` | 2 |
| [`playernames`](#playernames) | `BGwe` | 3 |
| [`playeroutfitlinks`](#playeroutfitlinks) | `bzkt` | 2 |
| [`playerperks`](#playerperks) | `YNjB` | 8 |
| [`playerpositionzones`](#playerpositionzones) | `AohT` | 9 |
| [`playerpronouns`](#playerpronouns) | `nhXl` | 3 |
| [`players`](#players) | `CZUM` | 152 |
| [`playersockoverride`](#playersockoverride) | `MytH` | 5 |
| [`playersuspensions`](#playersuspensions) | `ySyc` | 5 |
| [`playervoicemap`](#playervoicemap) | `WvnN` | 4 |
| [`playstyle_attribute_requirement`](#playstyle_attribute_requirement) | `PtOL` | 4 |
| [`playstyles`](#playstyles) | `LmCa` | 2 |
| [`positionbonus`](#positionbonus) | `ODXK` | 5 |
| [`presentationmodesettings`](#presentationmodesettings) | `PViY` | 6 |
| [`preset_fat`](#preset_fat) | `YBNq` | 185 |
| [`preset_flesh`](#preset_flesh) | `TdMN` | 233 |
| [`preset_skeletal`](#preset_skeletal) | `xKQd` | 233 |
| [`preset_skins`](#preset_skins) | `ytIC` | 105 |
| [`prevcompetitionstats`](#prevcompetitionstats) | `amvY` | 10 |
| [`previousteam`](#previousteam) | `rIsB` | 2 |
| [`rankweight`](#rankweight) | `uuBj` | 6 |
| [`referee`](#referee) | `mMQM` | 44 |
| [`reset_cost`](#reset_cost) | `Qfkb` | 4 |
| [`rivals`](#rivals) | `LbKk` | 5 |
| [`scenarioevents`](#scenarioevents) | `WJjv` | 6 |
| [`scenariosettings`](#scenariosettings) | `wgLZ` | 16 |
| [`seatcolor`](#seatcolor) | `irOE` | 3 |
| [`shoecolors`](#shoecolors) | `EVxj` | 4 |
| [`signature_perks`](#signature_perks) | `qHME` | 4 |
| [`signature_playstyles`](#signature_playstyles) | `EIue` | 4 |
| [`signatureabilitymap`](#signatureabilitymap) | `xiJh` | 4 |
| [`skillmeterchargecondition`](#skillmeterchargecondition) | `aIfc` | 2 |
| [`skins`](#skins) | `anIr` | 105 |
| [`slc`](#slc) | `ntyU` | 34 |
| [`slc_competition_overrides`](#slc_competition_overrides) | `rovx` | 4 |
| [`slc_fat`](#slc_fat) | `xzEJ` | 185 |
| [`slc_flesh`](#slc_flesh) | `KZHj` | 233 |
| [`slc_skeletal`](#slc_skeletal) | `nTVv` | 233 |
| [`slc_skins`](#slc_skins) | `fhLs` | 105 |
| [`smplayers`](#smplayers) | `vGSz` | 155 |
| [`smteams`](#smteams) | `gBTf` | 110 |
| [`spa`](#spa) | `fYGF` | 27 |
| [`spa_fat`](#spa_fat) | `zjNl` | 185 |
| [`spa_flesh`](#spa_flesh) | `WCGy` | 233 |
| [`spa_skeletal`](#spa_skeletal) | `rKry` | 233 |
| [`spa_skins`](#spa_skins) | `bOKd` | 73 |
| [`specialization_attr_strengths`](#specialization_attr_strengths) | `pBeE` | 4 |
| [`specialization_map`](#specialization_map) | `FAwA` | 2 |
| [`specialization_perks`](#specialization_perks) | `jiRJ` | 4 |
| [`sponsors`](#sponsors) | `fGwQ` | 6 |
| [`ssfformations`](#ssfformations) | `bnGP` | 26 |
| [`ssfstadiummusic`](#ssfstadiummusic) | `eJNd` | 4 |
| [`ssfstadiums`](#ssfstadiums) | `mfOS` | 5 |
| [`stadiumassignments`](#stadiumassignments) | `esAj` | 2 |
| [`stadiumcolor`](#stadiumcolor) | `cPVF` | 5 |
| [`stadiums`](#stadiums) | `QYeR` | 88 |
| [`starratingboundaries`](#starratingboundaries) | `AThf` | 3 |
| [`stories`](#stories) | `kgGh` | 7 |
| [`tattoo`](#tattoo) | `yeQw` | 10 |
| [`teamballremapping`](#teamballremapping) | `qsWt` | 2 |
| [`teamballs`](#teamballs) | `TWRE` | 7 |
| [`teamcounterparts`](#teamcounterparts) | `ImNE` | 4 |
| [`teamformationteamstylelinks`](#teamformationteamstylelinks) | `TKgq` | 4 |
| [`teamformdiff`](#teamformdiff) | `OIcD` | 10 |
| [`teamkithudvalues`](#teamkithudvalues) | `SPRL` | 4 |
| [`teamkits`](#teamkits) | `GdtI` | 72 |
| [`teamnationlinks`](#teamnationlinks) | `CxJp` | 3 |
| [`teamplayerlinks`](#teamplayerlinks) | `RrqT` | 16 |
| [`teamplayerlinks_vh`](#teamplayerlinks_vh) | `RnPg` | 16 |
| [`teams`](#teams) | `lyxL` | 110 |
| [`teamsheetanalysis`](#teamsheetanalysis) | `fqec` | 2 |
| [`teamsheets`](#teamsheets) | `GkeN` | 82 |
| [`teamsponsorlinks`](#teamsponsorlinks) | `nrFl` | 5 |
| [`teamstadiumlinks`](#teamstadiumlinks) | `kISL` | 4 |
| [`teamstadiumlinkscache`](#teamstadiumlinkscache) | `FPYB` | 2 |
| [`temp_createplayer`](#temp_createplayer) | `Yvvv` | 71 |
| [`temp_formations`](#temp_formations) | `qwYG` | 54 |
| [`temp_players`](#temp_players) | `HvYq` | 152 |
| [`temp_teamplayerlinks`](#temp_teamplayerlinks) | `cMPf` | 16 |
| [`temp_teams`](#temp_teams) | `FlJM` | 110 |
| [`tifo`](#tifo) | `tWYe` | 5 |
| [`trainingteamplayerlinks`](#trainingteamplayerlinks) | `uvKl` | 3 |
| [`trainingteamplayernames`](#trainingteamplayernames) | `RWuR` | 3 |
| [`trainingteamplayers`](#trainingteamplayers) | `JOhL` | 152 |
| [`transfers`](#transfers) | `IrZL` | 5 |
| [`turfattributesmap`](#turfattributesmap) | `kayb` | 5 |
| [`turfsquadtypemap`](#turfsquadtypemap) | `HKnN` | 3 |
| [`ucc`](#ucc) | `QMqB` | 4 |
| [`vanitystoreitemlink`](#vanitystoreitemlink) | `SizI` | 8 |
| [`version`](#version) | `DbIl` | 6 |
| [`videos`](#videos) | `aOcx` | 4 |
| [`vipplayers`](#vipplayers) | `xscJ` | 7 |
| [`wardrobecloset`](#wardrobecloset) | `nhDP` | 12 |
| [`wardrobeexclusions`](#wardrobeexclusions) | `WFUF` | 5 |
| [`womendeactivatedstories`](#womendeactivatedstories) | `VplT` | 2 |
| [`wtlocations`](#wtlocations) | `GJsg` | 7 |
| [`wtregions`](#wtregions) | `RrHu` | 5 |

## AudioDeactivatedStories

Binary code: `ltHX`. Record type: `Fc27Record<'AudioDeactivatedStories', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commentaryTeam` | `number` | `DBOFIELDTYPE_INTEGER` | `EQlZ` | 3 | 0 | 4 |  |
| `entryId` | `number` | `DBOFIELDTYPE_INTEGER` | `GPRA` | 10 | 0 | 999 | Yes |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `languageIndex` | `number` | `DBOFIELDTYPE_INTEGER` | `QZDX` | 5 | 0 | 19 |  |
| `storyCategory` | `number` | `DBOFIELDTYPE_INTEGER` | `iKSL` | 7 | 0 | 99 |  |

## BigAttendance

Binary code: `kcnb`. Record type: `Fc27Record<'BigAttendance', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 0 | 6 | Yes |
| `max` | `number` | `DBOFIELDTYPE_INTEGER` | `KODr` | 4 | 0 | 10 |  |
| `min` | `number` | `DBOFIELDTYPE_INTEGER` | `SbEu` | 4 | 0 | 10 |  |

## CustomizableAnthemChant

Binary code: `ULVc`. Record type: `Fc27Record<'CustomizableAnthemChant', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `audioItemId` | `number` | `DBOFIELDTYPE_INTEGER` | `UEGG` | 20 | 0 | 999999 |  |
| `halstring` | `string` | `DBOFIELDTYPE_STRING` | `mEmD` | 2048 | 0 | 0 |  |
| `isInCM` | `number` | `DBOFIELDTYPE_INTEGER` | `yPqP` | 1 | 0 | 1 |  |
| `isInProClubs` | `number` | `DBOFIELDTYPE_INTEGER` | `xKne` | 1 | 0 | 1 |  |
| `itemId` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 11 | 0 | 1500 | Yes |

## CustomizableChantPackage

Binary code: `hhCa`. Record type: `Fc27Record<'CustomizableChantPackage', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `audioItemId` | `number` | `DBOFIELDTYPE_INTEGER` | `UEGG` | 20 | 0 | 899999 |  |
| `halstring` | `string` | `DBOFIELDTYPE_STRING` | `mEmD` | 2048 | 0 | 0 |  |
| `isInCM` | `number` | `DBOFIELDTYPE_INTEGER` | `yPqP` | 1 | 0 | 1 |  |
| `isInProClubs` | `number` | `DBOFIELDTYPE_INTEGER` | `xKne` | 1 | 0 | 1 |  |
| `itemId` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 11 | 0 | 2000 | Yes |

## CustomizableGoalMusic

Binary code: `cYAU`. Record type: `Fc27Record<'CustomizableGoalMusic', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `audioItemId` | `number` | `DBOFIELDTYPE_INTEGER` | `UEGG` | 19 | 0 | 299999 |  |
| `halstring` | `string` | `DBOFIELDTYPE_STRING` | `mEmD` | 2048 | 0 | 0 |  |
| `isInCM` | `number` | `DBOFIELDTYPE_INTEGER` | `yPqP` | 1 | 0 | 1 |  |
| `isInProClubs` | `number` | `DBOFIELDTYPE_INTEGER` | `xKne` | 1 | 0 | 1 |  |
| `itemId` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 10 | 0 | 1000 | Yes |

## CustomizableTeamName

Binary code: `Ogiv`. Record type: `Fc27Record<'CustomizableTeamName', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `audioItemId` | `number` | `DBOFIELDTYPE_INTEGER` | `UEGG` | 20 | 0 | 899999 |  |
| `halstring` | `string` | `DBOFIELDTYPE_STRING` | `mEmD` | 2048 | 0 | 0 |  |
| `isInCM` | `number` | `DBOFIELDTYPE_INTEGER` | `yPqP` | 1 | 0 | 1 |  |
| `isInProClubs` | `number` | `DBOFIELDTYPE_INTEGER` | `xKne` | 1 | 0 | 1 |  |
| `itemId` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 9 | 0 | 500 | Yes |

## MatchIntensity

Binary code: `GZKc`. Record type: `Fc27Record<'MatchIntensity', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `scorediff` | `number` | `DBOFIELDTYPE_INTEGER` | `nsAB` | 4 | -4 | 4 | Yes |
| `time120` | `number` | `DBOFIELDTYPE_INTEGER` | `JNlh` | 3 | -1 | 3 |  |
| `time15` | `number` | `DBOFIELDTYPE_INTEGER` | `thqz` | 2 | -1 | 2 |  |
| `time30` | `number` | `DBOFIELDTYPE_INTEGER` | `fJEu` | 2 | -1 | 2 |  |
| `time45` | `number` | `DBOFIELDTYPE_INTEGER` | `ceKq` | 2 | -1 | 2 |  |
| `time60` | `number` | `DBOFIELDTYPE_INTEGER` | `mSAf` | 2 | -1 | 2 |  |
| `time75` | `number` | `DBOFIELDTYPE_INTEGER` | `zLph` | 3 | -1 | 3 |  |
| `time90` | `number` | `DBOFIELDTYPE_INTEGER` | `NWgg` | 2 | -1 | 2 |  |

## NoAttendance

Binary code: `zuHF`. Record type: `Fc27Record<'NoAttendance', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 0 | 6 | Yes |
| `max` | `number` | `DBOFIELDTYPE_INTEGER` | `KODr` | 4 | 0 | 10 |  |
| `min` | `number` | `DBOFIELDTYPE_INTEGER` | `SbEu` | 4 | 0 | 10 |  |

## SMPlayerCallLang

Binary code: `nnLI`. Record type: `Fc27Record<'SMPlayerCallLang', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playercallpatchbankindex` | `number` | `DBOFIELDTYPE_INTEGER` | `FvSS` | 5 | 0 | 31 |  |
| `voiceid` | `number` | `DBOFIELDTYPE_INTEGER` | `qsVX` | 19 | -1 | 300000 |  |

## accessories

Binary code: `RMfq`. Record type: `Fc27Record<'accessories', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessoryid` | `number` | `DBOFIELDTYPE_INTEGER` | `KYeV` | 14 | 0 | 10000 | Yes |
| `clothingtype` | `number` | `DBOFIELDTYPE_INTEGER` | `yPLv` | 5 | 0 | 16 |  |
| `texturevariationcount` | `number` | `DBOFIELDTYPE_INTEGER` | `AsxF` | 8 | 0 | 255 |  |

## activity_config

Binary code: `Txvi`. Record type: `Fc27Record<'activity_config', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `activity_name` | `string` | `DBOFIELDTYPE_STRING` | `zEYN` | 1560 | 0 | 0 |  |
| `activity_status` | `string` | `DBOFIELDTYPE_STRING` | `ELRO` | 1560 | 0 | 0 |  |
| `activity_type` | `number` | `DBOFIELDTYPE_INTEGER` | `Ztxi` | 8 | 1 | 255 |  |
| `activity_visuals_id` | `number` | `DBOFIELDTYPE_INTEGER` | `BQdA` | 8 | 0 | 255 |  |
| `away_kit_id` | `number` | `DBOFIELDTYPE_INTEGER` | `LAvN` | 24 | 0 | 9999999 |  |
| `away_kit_type` | `number` | `DBOFIELDTYPE_INTEGER` | `OtFW` | 5 | 0 | 17 |  |
| `away_kit_year` | `number` | `DBOFIELDTYPE_INTEGER` | `JJhc` | 14 | 0 | 9999 |  |
| `ball_asset_id` | `number` | `DBOFIELDTYPE_INTEGER` | `DsHM` | 8 | 0 | 255 |  |
| `goal_net_type` | `number` | `DBOFIELDTYPE_INTEGER` | `GfDt` | 3 | 0 | 4 |  |
| `half_time_in_seconds` | `number` | `DBOFIELDTYPE_INTEGER` | `pJMi` | 20 | 0 | 999999 |  |
| `home_kit_id` | `number` | `DBOFIELDTYPE_INTEGER` | `lUHQ` | 24 | 0 | 9999999 |  |
| `home_kit_type` | `number` | `DBOFIELDTYPE_INTEGER` | `wAvF` | 5 | 0 | 17 |  |
| `home_kit_year` | `number` | `DBOFIELDTYPE_INTEGER` | `vALX` | 14 | 0 | 9999 |  |
| `hud_config` | `string` | `DBOFIELDTYPE_STRING` | `KERv` | 1560 | 0 | 0 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 8 | 0 | 255 | Yes |
| `juego_file_path` | `string` | `DBOFIELDTYPE_STRING` | `giPS` | 1560 | 0 | 0 |  |
| `match_start_countdown` | `number` | `DBOFIELDTYPE_INTEGER` | `shwa` | 5 | 0 | 20 |  |
| `match_type` | `number` | `DBOFIELDTYPE_INTEGER` | `OXGw` | 4 | 1 | 14 |  |
| `max_instances` | `number` | `DBOFIELDTYPE_INTEGER` | `dzrQ` | 8 | 1 | 255 |  |
| `max_players_per_team` | `number` | `DBOFIELDTYPE_INTEGER` | `Fqfe` | 3 | 1 | 8 |  |
| `min_players_per_team` | `number` | `DBOFIELDTYPE_INTEGER` | `ccOC` | 3 | 1 | 8 |  |
| `min_players_per_team_to_continue_online_match` | `number` | `DBOFIELDTYPE_INTEGER` | `RwOM` | 3 | 1 | 8 |  |
| `num_players_per_team_in_gameplay` | `number` | `DBOFIELDTYPE_INTEGER` | `xzvA` | 3 | 1 | 8 |  |
| `num_teams` | `number` | `DBOFIELDTYPE_INTEGER` | `mMaL` | 2 | 1 | 4 |  |
| `num_teams_in_gameplay` | `number` | `DBOFIELDTYPE_INTEGER` | `OiUp` | 2 | 1 | 4 |  |
| `pitch_length` | `number` | `DBOFIELDTYPE_INTEGER` | `nimh` | 20 | 0 | 999999 |  |
| `pitch_offset_x` | `number` | `DBOFIELDTYPE_INTEGER` | `hsTw` | 21 | -999999 | 999999 |  |
| `pitch_width` | `number` | `DBOFIELDTYPE_INTEGER` | `jDfC` | 20 | 0 | 999999 |  |
| `squad_type` | `number` | `DBOFIELDTYPE_INTEGER` | `vbcG` | 8 | -128 | 127 |  |

## adboardconsoleoverrides

Binary code: `OSkO`. Record type: `Fc27Record<'adboardconsoleoverrides', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adsponserid` | `number` | `DBOFIELDTYPE_INTEGER` | `Laxd` | 13 | 0 | 8191 |  |
| `console` | `string` | `DBOFIELDTYPE_STRING` | `SQEc` | 32 | 0 | 0 |  |
| `dynamicimageid` | `number` | `DBOFIELDTYPE_INTEGER` | `zlDt` | 13 | 0 | 8191 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `replacementid` | `number` | `DBOFIELDTYPE_INTEGER` | `Mtwa` | 13 | 0 | 8191 |  |
| `replacementimageid` | `number` | `DBOFIELDTYPE_INTEGER` | `MLqE` | 13 | 0 | 8191 |  |
| `tablekey` | `number` | `DBOFIELDTYPE_INTEGER` | `hlfq` | 18 | 0 | 200000 |  |
| `tablename` | `string` | `DBOFIELDTYPE_STRING` | `CYxj` | 192 | 0 | 0 |  |

## adboardlogicexceptions

Binary code: `zIOu`. Record type: `Fc27Record<'adboardlogicexceptions', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `CompComparisonType` | `number` | `DBOFIELDTYPE_INTEGER` | `WOos` | 4 | -1 | 12 |  |
| `CompetitionId` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | -1 | 9999999 |  |
| `ExcepType` | `number` | `DBOFIELDTYPE_INTEGER` | `ZqGw` | 9 | 0 | 256 |  |
| `IsHomeTeamInStadium` | `number` | `DBOFIELDTYPE_INTEGER` | `syie` | 2 | -1 | 1 |  |
| `MatchType` | `number` | `DBOFIELDTYPE_INTEGER` | `ZWvy` | 10 | -1 | 512 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 13 | 0 | 8191 | Yes |
| `awayleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `TSDz` | 12 | -1 | 4000 |  |
| `country` | `string` | `DBOFIELDTYPE_STRING` | `HMyc` | 24 | 0 | 0 |  |
| `dataoverride` | `number` | `DBOFIELDTYPE_INTEGER` | `ulkw` | 24 | -1 | 9999999 |  |
| `homeleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `qKND` | 12 | -1 | 4000 |  |
| `partnerEnabled` | `number` | `DBOFIELDTYPE_INTEGER` | `sQME` | 4 | -1 | 12 |  |

## agents

Binary code: `eqXx`. Record type: `Fc27Record<'agents', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `agentid` | `number` | `DBOFIELDTYPE_INTEGER` | `GsxF` | 19 | 1 | 500000 | Yes |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `commonname` | `string` | `DBOFIELDTYPE_STRING` | `xnfZ` | 640 | 0 | 0 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `firstname` | `string` | `DBOFIELDTYPE_STRING` | `HdeP` | 640 | 0 | 0 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `personalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `IIKl` | 2 | 0 | 2 |  |
| `seasonaloutfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `tFVQ` | 20 | 0 | 1000000 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `surname` | `string` | `DBOFIELDTYPE_STRING` | `rREd` | 640 | 0 | 0 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 115 |  |

## archetypes

Binary code: `UPmi`. Record type: `Fc27Record<'archetypes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 | Yes |
| `categoryid` | `number` | `DBOFIELDTYPE_INTEGER` | `rkMY` | 8 | 0 | 255 |  |
| `enabled` | `number` | `DBOFIELDTYPE_INTEGER` | `IaYq` | 1 | 0 | 1 |  |
| `releasetimestamp` | `number` | `DBOFIELDTYPE_DATE` | `uxmy` | 20 | 0 | 1048575 |  |

## associatedplayers

Binary code: `eDZz`. Record type: `Fc27Record<'associatedplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |

## associateplayerspec

Binary code: `HAuy`. Record type: `Fc27Record<'associateplayerspec', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |

## attribute_strengths

Binary code: `YxHb`. Record type: `Fc27Record<'attribute_strengths', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `attributestrengthid` | `number` | `DBOFIELDTYPE_INTEGER` | `QdNu` | 13 | 0 | 5000 | Yes |
| `value` | `number` | `DBOFIELDTYPE_INTEGER` | `SbfX` | 8 | 0 | 255 |  |

## attributecategorymap

Binary code: `yDnI`. Record type: `Fc27Record<'attributecategorymap', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attribute` | `number` | `DBOFIELDTYPE_INTEGER` | `KvvE` | 6 | -1 | 34 | Yes |
| `category` | `number` | `DBOFIELDTYPE_INTEGER` | `jPMu` | 4 | -1 | 8 |  |
| `gkcategory` | `number` | `DBOFIELDTYPE_INTEGER` | `DSlx` | 4 | -1 | 8 |  |
| `weight` | `number \| null` | `DBOFIELDTYPE_REAL` | `sNZW` | 32 | 0 | 0 |  |

## attributeprefpositionformula

Binary code: `jhTx`. Record type: `Fc27Record<'attributeprefpositionformula', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attribute` | `number` | `DBOFIELDTYPE_INTEGER` | `KvvE` | 6 | 0 | 56 |  |
| `percentage` | `number` | `DBOFIELDTYPE_INTEGER` | `tEbp` | 7 | 1 | 100 |  |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 6 | 0 | 54 | Yes |

## audionation

Binary code: `Mmou`. Record type: `Fc27Record<'audionation', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ambienceregionindex` | `number` | `DBOFIELDTYPE_INTEGER` | `OElR` | 4 | 0 | 15 |  |
| `chantregionindex` | `number` | `DBOFIELDTYPE_INTEGER` | `qqia` | 5 | 1 | 17 |  |
| `crowdbedsregionindex` | `number` | `DBOFIELDTYPE_INTEGER` | `FHbG` | 4 | 0 | 15 |  |
| `defaultcommlang` | `string` | `DBOFIELDTYPE_STRING` | `vYtt` | 48 | 0 | 0 |  |
| `hecklesregionindex` | `number` | `DBOFIELDTYPE_INTEGER` | `nINU` | 4 | 0 | 15 |  |
| `nationid` | `number` | `DBOFIELDTYPE_INTEGER` | `LEtt` | 8 | 0 | 255 | Yes |
| `palanguageindex` | `number` | `DBOFIELDTYPE_INTEGER` | `SuxC` | 6 | -1 | 31 |  |
| `playercallpatchbankindex` | `number` | `DBOFIELDTYPE_INTEGER` | `FvSS` | 5 | 0 | 31 |  |
| `reactionsregionindex` | `number` | `DBOFIELDTYPE_INTEGER` | `gtru` | 4 | 0 | 15 |  |
| `ssfplayercallindex` | `number` | `DBOFIELDTYPE_INTEGER` | `eaQJ` | 5 | 0 | 31 |  |
| `teamcanwhistleindex` | `number` | `DBOFIELDTYPE_INTEGER` | `vTsr` | 1 | 0 | 1 |  |
| `whistlesregionindex` | `number` | `DBOFIELDTYPE_INTEGER` | `cFjM` | 4 | 0 | 15 |  |

## audiostadium

Binary code: `Jpfv`. Record type: `Fc27Record<'audiostadium', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `matchsizetypeindex` | `number` | `DBOFIELDTYPE_INTEGER` | `nEQf` | 3 | -1 | 6 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 13 | 0 | 6000 | Yes |
| `stadiumlanguageindex` | `number` | `DBOFIELDTYPE_INTEGER` | `SBCD` | 6 | -1 | 31 |  |
| `stadiumpalanguageindex` | `number` | `DBOFIELDTYPE_INTEGER` | `yHUH` | 6 | -1 | 31 |  |

## bannerplayers

Binary code: `nhky`. Record type: `Fc27Record<'bannerplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `hasbanner` | `number` | `DBOFIELDTYPE_INTEGER` | `GxAC` | 1 | 0 | 1 |  |
| `hastifo` | `number` | `DBOFIELDTYPE_INTEGER` | `BdXK` | 1 | 0 | 1 |  |
| `isnew` | `number` | `DBOFIELDTYPE_INTEGER` | `MQrn` | 1 | 0 | 1 |  |
| `legend` | `number` | `DBOFIELDTYPE_INTEGER` | `FCfB` | 1 | 0 | 1 |  |
| `playertechid` | `number` | `DBOFIELDTYPE_INTEGER` | `gDDc` | 19 | -2 | 500000 | Yes |
| `teamtechid` | `number` | `DBOFIELDTYPE_INTEGER` | `qljg` | 18 | -2 | 200000 |  |
| `useinfut` | `number` | `DBOFIELDTYPE_INTEGER` | `fZzF` | 1 | 0 | 1 |  |

## basehead_fat

Binary code: `AXbo`. Record type: `Fc27Record<'basehead_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 | Yes |

## basehead_flesh

Binary code: `eqqo`. Record type: `Fc27Record<'basehead_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 | Yes |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |

## basehead_skeletal

Binary code: `luAI`. Record type: `Fc27Record<'basehead_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 7 | 0 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 7 | 0 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 | Yes |

## bigmatchups

Binary code: `IosO`. Record type: `Fc27Record<'bigmatchups', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `teamid1` | `number` | `DBOFIELDTYPE_INTEGER` | `fmFo` | 18 | -1 | 200000 | Yes |
| `teamid2` | `number` | `DBOFIELDTYPE_INTEGER` | `afAW` | 18 | -1 | 200000 |  |

## brandpartnerassets

Binary code: `xuka`. Record type: `Fc27Record<'brandpartnerassets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `string` | `DBOFIELDTYPE_STRING` | `yeEP` | 248 | 0 | 0 |  |
| `brandtype` | `number` | `DBOFIELDTYPE_INTEGER` | `gbDt` | 4 | 0 | 12 |  |
| `country` | `string` | `DBOFIELDTYPE_STRING` | `HMyc` | 24 | 0 | 0 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `internalassetid` | `string` | `DBOFIELDTYPE_STRING` | `KAUP` | 248 | 0 | 0 |  |
| `internalstringid` | `string` | `DBOFIELDTYPE_STRING` | `roOU` | 248 | 0 | 0 |  |
| `overlayid` | `number` | `DBOFIELDTYPE_INTEGER` | `ulRR` | 10 | -1 | 1000 |  |
| `stringid` | `string` | `DBOFIELDTYPE_STRING` | `sAhV` | 248 | 0 | 0 |  |

## brandpartners

Binary code: `HeDf`. Record type: `Fc27Record<'brandpartners', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `enabled` | `number` | `DBOFIELDTYPE_INTEGER` | `IaYq` | 1 | 0 | 1 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 10 | 0 | 1000 |  |
| `type` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpXz` | 4 | 0 | 12 | Yes |
| `width` | `number` | `DBOFIELDTYPE_INTEGER` | `HeiA` | 10 | 0 | 1000 |  |

## brandtypes

Binary code: `VZEn`. Record type: `Fc27Record<'brandtypes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `enabled` | `number` | `DBOFIELDTYPE_INTEGER` | `IaYq` | 1 | 0 | 1 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 10 | 0 | 1000 |  |
| `type` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpXz` | 4 | 0 | 12 | Yes |
| `width` | `number` | `DBOFIELDTYPE_INTEGER` | `HeiA` | 10 | 0 | 1000 |  |

## broadcastleague

Binary code: `idNB`. Record type: `Fc27Record<'broadcastleague', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 12 | 0 | 4000 | Yes |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 |  |
| `nationid` | `number` | `DBOFIELDTYPE_INTEGER` | `LEtt` | 12 | 0 | 3000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## career_birthingpool

Binary code: `Zswx`. Record type: `Fc27Record<'career_birthingpool', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ethnicity` | `number` | `DBOFIELDTYPE_INTEGER` | `aArc` | 4 | 0 | 10 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 4 | 1 | 16 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 16 | 460000 | 500000 | Yes |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |

## career_calendar

Binary code: `GJUr`. Record type: `Fc27Record<'career_calendar', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `currdate` | `number` | `DBOFIELDTYPE_INTEGER` | `aLZZ` | 19 | 20080101 | 20601231 |  |
| `dateid` | `number` | `DBOFIELDTYPE_INTEGER` | `RgdW` | 1 | 0 | 1 | Yes |
| `enddate` | `number` | `DBOFIELDTYPE_INTEGER` | `ZPUX` | 19 | 20080101 | 20601231 |  |
| `objectivecheckdate` | `number` | `DBOFIELDTYPE_INTEGER` | `tmje` | 19 | 20080101 | 20601231 |  |
| `setupdate` | `number` | `DBOFIELDTYPE_INTEGER` | `KNVN` | 19 | 20080101 | 20601231 |  |
| `startdate` | `number` | `DBOFIELDTYPE_INTEGER` | `vHhZ` | 19 | 20080101 | 20601231 |  |
| `transferwindowend1` | `number` | `DBOFIELDTYPE_INTEGER` | `PpdA` | 11 | 101 | 1231 |  |
| `transferwindowend2` | `number` | `DBOFIELDTYPE_INTEGER` | `igYC` | 11 | 101 | 1231 |  |
| `transferwindowstart1` | `number` | `DBOFIELDTYPE_INTEGER` | `sUgA` | 11 | 101 | 1231 |  |
| `transferwindowstart2` | `number` | `DBOFIELDTYPE_INTEGER` | `Jdde` | 11 | 101 | 1231 |  |

## career_clinchedobjectives

Binary code: `wzLs`. Record type: `Fc27Record<'career_clinchedobjectives', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `clinchedobjectivesflags` | `number` | `DBOFIELDTYPE_INTEGER` | `FstU` | 31 | 0 | 2147483520 |  |
| `predictedclinchfordrawflags` | `number` | `DBOFIELDTYPE_INTEGER` | `FmWG` | 31 | 0 | 2147483520 |  |
| `predictedclinchforlossflags` | `number` | `DBOFIELDTYPE_INTEGER` | `KMrt` | 31 | 0 | 2147483520 |  |
| `predictedclinchforwinflags` | `number` | `DBOFIELDTYPE_INTEGER` | `hnzX` | 31 | 0 | 2147483520 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## career_commonnames

Binary code: `NtND`. Record type: `Fc27Record<'career_commonnames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commonnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `HDYx` | 10 | 1 | 1024 | Yes |
| `firstname` | `number` | `DBOFIELDTYPE_INTEGER` | `HdeP` | 16 | 0 | 45999 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `groupid` | `number` | `DBOFIELDTYPE_INTEGER` | `kSLo` | 7 | 0 | 127 |  |
| `has_audio` | `number` | `DBOFIELDTYPE_INTEGER` | `sRPO` | 1 | 0 | 1 |  |
| `lastname` | `number` | `DBOFIELDTYPE_INTEGER` | `QbMR` | 16 | 0 | 45999 |  |

## career_createplayerattributes

Binary code: `ohco`. Record type: `Fc27Record<'career_createplayerattributes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `agemax` | `number` | `DBOFIELDTYPE_INTEGER` | `oLyM` | 5 | 16 | 38 |  |
| `agemin` | `number` | `DBOFIELDTYPE_INTEGER` | `wylh` | 5 | 16 | 38 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `overallmax` | `number` | `DBOFIELDTYPE_INTEGER` | `RZUd` | 7 | 1 | 99 |  |
| `overallmin` | `number` | `DBOFIELDTYPE_INTEGER` | `RUPI` | 7 | 1 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `playerposgroup` | `number` | `DBOFIELDTYPE_INTEGER` | `HNhy` | 4 | 0 | 10 |  |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |

## career_firstnames

Binary code: `sYnV`. Record type: `Fc27Record<'career_firstnames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `firstname` | `number` | `DBOFIELDTYPE_INTEGER` | `HdeP` | 16 | 0 | 45999 |  |
| `firstnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `tHlO` | 15 | 1 | 20000 | Yes |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `groupid` | `number` | `DBOFIELDTYPE_INTEGER` | `kSLo` | 7 | 0 | 127 |  |
| `has_audio` | `number` | `DBOFIELDTYPE_INTEGER` | `sRPO` | 1 | 0 | 1 |  |

## career_lastnames

Binary code: `vInR`. Record type: `Fc27Record<'career_lastnames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `groupid` | `number` | `DBOFIELDTYPE_INTEGER` | `kSLo` | 7 | 0 | 127 |  |
| `has_audio` | `number` | `DBOFIELDTYPE_INTEGER` | `sRPO` | 1 | 0 | 1 |  |
| `lastname` | `number` | `DBOFIELDTYPE_INTEGER` | `QbMR` | 16 | 0 | 45999 |  |
| `lastnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `QCfa` | 15 | 1 | 20000 | Yes |

## career_managerawards

Binary code: `ShPa`. Record type: `Fc27Record<'career_managerawards', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 6 | 0 | 32 | Yes |
| `count` | `number` | `DBOFIELDTYPE_INTEGER` | `ytjZ` | 8 | 1 | 180 |  |
| `receiveddate` | `number` | `DBOFIELDTYPE_DATE` | `tnEA` | 20 | 0 | 1048575 |  |
| `season` | `number` | `DBOFIELDTYPE_INTEGER` | `vojK` | 5 | 0 | 31 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | 1 | 200000 |  |
| `typeid` | `number` | `DBOFIELDTYPE_INTEGER` | `Bwgx` | 2 | 0 | 2 |  |

## career_playerawards

Binary code: `cPet`. Record type: `Fc27Record<'career_playerawards', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 9 | 0 | 480 | Yes |
| `count` | `number` | `DBOFIELDTYPE_INTEGER` | `ytjZ` | 10 | 1 | 720 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 |  |
| `season` | `number` | `DBOFIELDTYPE_INTEGER` | `vojK` | 5 | 0 | 31 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | 1 | 200000 |  |
| `typeid` | `number` | `DBOFIELDTYPE_INTEGER` | `Bwgx` | 5 | 0 | 30 |  |

## career_playergrowthuserseason

Binary code: `DyYs`. Record type: `Fc27Record<'career_playergrowthuserseason', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 0 | 99 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 0 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 0 | 99 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 0 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 0 | 99 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 0 | 99 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 0 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 0 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 0 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 0 | 99 |  |
| `dribspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `fUMM` | 7 | 0 | 99 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 0 | 99 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 0 | 99 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 0 | 99 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 0 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 0 | 99 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 0 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 0 | 99 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 0 | 99 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 0 | 99 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 0 | 99 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 0 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 0 | 99 |  |
| `overall` | `number` | `DBOFIELDTYPE_INTEGER` | `VvuV` | 7 | 0 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 0 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 0 | 99 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 0 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 0 | 99 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 0 | 99 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 0 | 99 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 0 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 0 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 0 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 0 | 99 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 0 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 0 | 99 |  |

## career_playermatchratinghistory

Binary code: `TtHG`. Record type: `Fc27Record<'career_playermatchratinghistory', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 19 | 0 | 500000 | Yes |
| `date` | `number` | `DBOFIELDTYPE_INTEGER` | `HBfc` | 19 | 20080101 | 20601231 |  |
| `minsplayed` | `number` | `DBOFIELDTYPE_INTEGER` | `Amxm` | 8 | -1 | 140 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 |  |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 5 | 0 | 31 |  |
| `rating` | `number` | `DBOFIELDTYPE_INTEGER` | `Xxmh` | 7 | -1 | 100 |  |

## career_regenplayerattributes

Binary code: `rJnj`. Record type: `Fc27Record<'career_regenplayerattributes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `age` | `number` | `DBOFIELDTYPE_INTEGER` | `SgJQ` | 3 | 16 | 21 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `overall` | `number` | `DBOFIELDTYPE_INTEGER` | `VvuV` | 7 | 1 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `playerposgroup` | `number` | `DBOFIELDTYPE_INTEGER` | `HNhy` | 4 | 0 | 10 | Yes |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |

## career_scoutmission

Binary code: `apoo`. Record type: `Fc27Record<'career_scoutmission', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `durationid` | `number` | `DBOFIELDTYPE_INTEGER` | `jgKO` | 2 | 0 | 2 |  |
| `missioncost` | `number` | `DBOFIELDTYPE_INTEGER` | `Oqft` | 9 | 0 | 511 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 9 | 0 | 300 |  |
| `preferredposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `wZQU` | 5 | -1 | 29 |  |
| `preferredposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `NgVS` | 5 | -1 | 29 |  |
| `preferredposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `OblE` | 5 | -1 | 29 |  |
| `preferredposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `YnYz` | 5 | -1 | 29 |  |
| `preferredposition5` | `number` | `DBOFIELDTYPE_INTEGER` | `rkcN` | 5 | -1 | 29 |  |
| `preferredposition6` | `number` | `DBOFIELDTYPE_INTEGER` | `GdFb` | 5 | -1 | 29 |  |
| `preferredposition7` | `number` | `DBOFIELDTYPE_INTEGER` | `VeVh` | 5 | -1 | 29 |  |
| `preferredrole1` | `number` | `DBOFIELDTYPE_INTEGER` | `oyIc` | 6 | -1 | 45 |  |
| `preferredrole2` | `number` | `DBOFIELDTYPE_INTEGER` | `FHlK` | 6 | -1 | 45 |  |
| `preferredrole3` | `number` | `DBOFIELDTYPE_INTEGER` | `WEpA` | 6 | -1 | 45 |  |
| `returningdate` | `number` | `DBOFIELDTYPE_INTEGER` | `DgMU` | 19 | 20080101 | 20601231 |  |
| `scoutid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ekyv` | 2 | 0 | 2 | Yes |

## career_scouts

Binary code: `zlrC`. Record type: `Fc27Record<'career_scouts', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `experience` | `number` | `DBOFIELDTYPE_INTEGER` | `DDyw` | 3 | 0 | 4 |  |
| `firstname` | `string` | `DBOFIELDTYPE_STRING` | `HdeP` | 360 | 0 | 0 |  |
| `knowledge` | `number` | `DBOFIELDTYPE_INTEGER` | `iWKO` | 3 | 0 | 4 |  |
| `lastname` | `string` | `DBOFIELDTYPE_STRING` | `QbMR` | 360 | 0 | 0 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 9 | 0 | 300 |  |
| `regionid` | `number` | `DBOFIELDTYPE_INTEGER` | `tNdD` | 4 | 0 | 9 |  |
| `scoutid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ekyv` | 2 | 0 | 2 | Yes |
| `state` | `number` | `DBOFIELDTYPE_INTEGER` | `QvxI` | 2 | 0 | 3 |  |

## career_teamofweek

Binary code: `pygX`. Record type: `Fc27Record<'career_teamofweek', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 8 | 0 | 255 | Yes |
| `matchrating` | `number` | `DBOFIELDTYPE_INTEGER` | `kRUB` | 14 | 0 | 12700 |  |
| `month` | `number` | `DBOFIELDTYPE_INTEGER` | `JKLp` | 4 | 1 | 12 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 |  |
| `weekswon` | `number` | `DBOFIELDTYPE_INTEGER` | `hmLg` | 3 | 0 | 5 |  |

## career_youth_skins

Binary code: `bFKF`. Record type: `Fc27Record<'career_youth_skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 16 | 460000 | 500000 | Yes |
| `freckles0` | `number` | `DBOFIELDTYPE_INTEGER` | `HvlV` | 5 | 0 | 24 |  |
| `freckles1` | `number` | `DBOFIELDTYPE_INTEGER` | `IspD` | 5 | 0 | 24 |  |
| `freckles2` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBsd` | 5 | 0 | 24 |  |
| `freckles3` | `number` | `DBOFIELDTYPE_INTEGER` | `CCIT` | 5 | 0 | 24 |  |
| `freckles4` | `number` | `DBOFIELDTYPE_INTEGER` | `MGBc` | 5 | 0 | 24 |  |
| `freckles5` | `number` | `DBOFIELDTYPE_INTEGER` | `DNFe` | 5 | 0 | 24 |  |
| `freckles6` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgA` | 5 | 0 | 24 |  |
| `freckles7` | `number` | `DBOFIELDTYPE_INTEGER` | `JzwK` | 5 | 0 | 24 |  |
| `frecklesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `eIgP` | 7 | 0 | 100 |  |
| `frecklesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `hDQh` | 7 | 0 | 100 |  |
| `frecklesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `AKpf` | 7 | 0 | 100 |  |
| `frecklesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `fRlp` | 7 | 0 | 100 |  |
| `frecklesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `lhoq` | 7 | 0 | 100 |  |
| `frecklesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `aiYo` | 7 | 0 | 100 |  |
| `frecklesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `vbVW` | 7 | 0 | 100 |  |
| `frecklesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `kYRM` | 7 | 0 | 100 |  |
| `moles0` | `number` | `DBOFIELDTYPE_INTEGER` | `ohSp` | 5 | 0 | 24 |  |
| `moles1` | `number` | `DBOFIELDTYPE_INTEGER` | `baCr` | 5 | 0 | 24 |  |
| `moles2` | `number` | `DBOFIELDTYPE_INTEGER` | `qjbN` | 5 | 0 | 24 |  |
| `moles3` | `number` | `DBOFIELDTYPE_INTEGER` | `loXX` | 5 | 0 | 24 |  |
| `moles4` | `number` | `DBOFIELDTYPE_INTEGER` | `rEig` | 5 | 0 | 24 |  |
| `moles5` | `number` | `DBOFIELDTYPE_INTEGER` | `YHSO` | 5 | 0 | 24 |  |
| `moles6` | `number` | `DBOFIELDTYPE_INTEGER` | `pyPo` | 5 | 0 | 24 |  |
| `moles7` | `number` | `DBOFIELDTYPE_INTEGER` | `mxLe` | 5 | 0 | 24 |  |
| `molesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `pqyU` | 7 | 0 | 100 |  |
| `molesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `axuK` | 7 | 0 | 100 |  |
| `molesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `XoTA` | 7 | 0 | 100 |  |
| `molesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `EjDi` | 7 | 0 | 100 |  |
| `molesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `ivGt` | 7 | 0 | 100 |  |
| `molesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `hsCD` | 7 | 0 | 100 |  |
| `molesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `cBzJ` | 7 | 0 | 100 |  |
| `molesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `zCjL` | 7 | 0 | 100 |  |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## career_youthplayerhistory

Binary code: `TcEm`. Record type: `Fc27Record<'career_youthplayerhistory', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `appearances` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWT` | 7 | 0 | 127 |  |
| `goals` | `number` | `DBOFIELDTYPE_INTEGER` | `MERA` | 8 | 0 | 255 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |

## career_youthplayerposattributes

Binary code: `aREe`. Record type: `Fc27Record<'career_youthplayerposattributes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `age` | `number` | `DBOFIELDTYPE_INTEGER` | `SgJQ` | 6 | 140 | 180 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `playerposgroup` | `number` | `DBOFIELDTYPE_INTEGER` | `HNhy` | 4 | 0 | 11 | Yes |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |

## career_youthplayers

Binary code: `IOmq`. Record type: `Fc27Record<'career_youthplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `monthsinsquad` | `number` | `DBOFIELDTYPE_INTEGER` | `Otjv` | 6 | 0 | 48 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |
| `playertier` | `number` | `DBOFIELDTYPE_INTEGER` | `SLEA` | 2 | 0 | 3 |  |
| `potentialvariance` | `number` | `DBOFIELDTYPE_INTEGER` | `Ihti` | 3 | 0 | 5 |  |
| `swinglowpotential` | `number` | `DBOFIELDTYPE_INTEGER` | `vYeO` | 5 | -10 | 10 |  |

## celebrations

Binary code: `NspG`. Record type: `Fc27Record<'celebrations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `celebrationid` | `number` | `DBOFIELDTYPE_INTEGER` | `IiYd` | 4 | 0 | 13 | Yes |

## clubcoefficients

Binary code: `fggG`. Record type: `Fc27Record<'clubcoefficients', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `points` | `number` | `DBOFIELDTYPE_INTEGER` | `Yyym` | 19 | 0 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `year1` | `number` | `DBOFIELDTYPE_INTEGER` | `kqTY` | 17 | 0 | 100000 |  |
| `year2` | `number` | `DBOFIELDTYPE_INTEGER` | `Rjqm` | 17 | 0 | 100000 |  |
| `year3` | `number` | `DBOFIELDTYPE_INTEGER` | `ugaw` | 17 | 0 | 100000 |  |
| `year4` | `number` | `DBOFIELDTYPE_INTEGER` | `sQjz` | 17 | 0 | 100000 |  |
| `year5` | `number` | `DBOFIELDTYPE_INTEGER` | `nLfx` | 17 | 0 | 100000 |  |

## clubcommentarynames

Binary code: `oqeq`. Record type: `Fc27Record<'clubcommentarynames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 10 | 4000 | 5000 | Yes |
| `commentarystartingletter` | `number` | `DBOFIELDTYPE_INTEGER` | `LZXw` | 5 | 1 | 26 |  |

## clubcustomization_asset

Binary code: `jyKl`. Record type: `Fc27Record<'clubcustomization_asset', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 28 | 1 | 199999999 | Yes |
| `assettype` | `number` | `DBOFIELDTYPE_INTEGER` | `jmFE` | 7 | 1 | 99 |  |
| `attr1` | `string` | `DBOFIELDTYPE_STRING` | `mmiq` | 520 | 0 | 0 |  |
| `attr2` | `string` | `DBOFIELDTYPE_STRING` | `XvHU` | 520 | 0 | 0 |  |
| `attr3` | `string` | `DBOFIELDTYPE_STRING` | `ssra` | 520 | 0 | 0 |  |
| `attr4` | `string` | `DBOFIELDTYPE_STRING` | `iECV` | 520 | 0 | 0 |  |
| `attr5` | `string` | `DBOFIELDTYPE_STRING` | `tzyP` | 520 | 0 | 0 |  |
| `attr6` | `string` | `DBOFIELDTYPE_STRING` | `cqvx` | 520 | 0 | 0 |  |
| `attr7` | `string` | `DBOFIELDTYPE_STRING` | `nxfj` | 520 | 0 | 0 |  |

## clubcustomization_bundle

Binary code: `DdMn`. Record type: `Fc27Record<'clubcustomization_bundle', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `asset1` | `number` | `DBOFIELDTYPE_INTEGER` | `efhx` | 28 | 0 | 199999999 |  |
| `asset2` | `number` | `DBOFIELDTYPE_INTEGER` | `fWcr` | 28 | 0 | 199999999 |  |
| `asset3` | `number` | `DBOFIELDTYPE_INTEGER` | `AdMh` | 28 | 0 | 199999999 |  |
| `asset4` | `number` | `DBOFIELDTYPE_INTEGER` | `aFZW` | 28 | 0 | 199999999 |  |
| `asset5` | `number` | `DBOFIELDTYPE_INTEGER` | `lGVo` | 28 | 0 | 199999999 |  |
| `asset6` | `number` | `DBOFIELDTYPE_INTEGER` | `kPsy` | 28 | 0 | 199999999 |  |
| `asset7` | `number` | `DBOFIELDTYPE_INTEGER` | `vMcI` | 28 | 0 | 199999999 |  |
| `asset8` | `number` | `DBOFIELDTYPE_INTEGER` | `jvBx` | 28 | 0 | 199999999 |  |
| `asset9` | `number` | `DBOFIELDTYPE_INTEGER` | `ssxL` | 28 | 0 | 199999999 |  |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 17 | 300000 | 399999 | Yes |
| `reprequirement` | `number` | `DBOFIELDTYPE_INTEGER` | `Zhba` | 4 | 0 | 10 |  |
| `theme` | `number` | `DBOFIELDTYPE_INTEGER` | `kdcj` | 28 | 0 | 199999999 |  |

## clubcustomization_cardeffects

Binary code: `IxJA`. Record type: `Fc27Record<'clubcustomization_cardeffects', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `cardid` | `number` | `DBOFIELDTYPE_INTEGER` | `oMYV` | 28 | 0 | 199999999 |  |
| `effecttype` | `number` | `DBOFIELDTYPE_INTEGER` | `JIFT` | 7 | 0 | 99 |  |
| `impact` | `number` | `DBOFIELDTYPE_INTEGER` | `DZkI` | 10 | 0 | 999 |  |
| `impactid` | `number` | `DBOFIELDTYPE_INTEGER` | `Snyl` | 7 | 0 | 99 |  |

## clubcustomization_facilitycards

Binary code: `NRkp`. Record type: `Fc27Record<'clubcustomization_facilitycards', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `cardgroupid` | `number` | `DBOFIELDTYPE_INTEGER` | `vLhr` | 28 | 0 | 199999999 |  |
| `categoryid` | `number` | `DBOFIELDTYPE_INTEGER` | `rkMY` | 28 | 0 | 199999999 |  |
| `cost` | `number` | `DBOFIELDTYPE_INTEGER` | `pNkG` | 28 | 0 | 199999999 |  |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 28 | 0 | 199999999 | Yes |
| `starrating` | `number` | `DBOFIELDTYPE_INTEGER` | `zFJl` | 3 | 1 | 5 |  |

## clubcustomization_kit

Binary code: `EInh`. Record type: `Fc27Record<'clubcustomization_kit', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 17 | 300000 | 399999 | Yes |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 20 | 1 | 999999 |  |

## clubcustomization_stadium

Binary code: `XhKr`. Record type: `Fc27Record<'clubcustomization_stadium', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 17 | 300000 | 399999 | Yes |
| `reprequirement` | `number` | `DBOFIELDTYPE_INTEGER` | `Zhba` | 4 | 0 | 10 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 2 | 483 | 485 |  |
| `tier` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBjI` | 2 | 1 | 3 |  |

## clubcustomization_tifo

Binary code: `iZmr`. Record type: `Fc27Record<'clubcustomization_tifo', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `backgroundassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Dxss` | 28 | 1 | 199999999 |  |
| `foregroundassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GNED` | 28 | 1 | 199999999 |  |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 17 | 300000 | 399999 | Yes |
| `reprequirement` | `number` | `DBOFIELDTYPE_INTEGER` | `Zhba` | 4 | 0 | 10 |  |

## clubcustomization_trophy

Binary code: `ngsH`. Record type: `Fc27Record<'clubcustomization_trophy', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 28 | 1 | 199999999 |  |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 17 | 300000 | 399999 | Yes |

## cm_attr_upgrade_cost_curve_map

Binary code: `WqKr`. Record type: `Fc27Record<'cm_attr_upgrade_cost_curve_map', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `curveid` | `number` | `DBOFIELDTYPE_INTEGER` | `hAeZ` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 13 | 0 | 5000 | Yes |

## cm_attribute_upgrade_cost

Binary code: `Kgqz`. Record type: `Fc27Record<'cm_attribute_upgrade_cost', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributevalue` | `number` | `DBOFIELDTYPE_INTEGER` | `HPNP` | 8 | 0 | 255 |  |
| `cost` | `number` | `DBOFIELDTYPE_INTEGER` | `pNkG` | 19 | 0 | 500000 |  |
| `curveattributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `tIsu` | 13 | 0 | 5000 | Yes |
| `curveid` | `number` | `DBOFIELDTYPE_INTEGER` | `hAeZ` | 8 | 0 | 255 |  |

## cm_default_mentalities

Binary code: `UWjr`. Record type: `Fc27Record<'cm_default_mentalities', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `mentalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `AwZu` | 13 | 0 | 8000 | Yes |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 2 | -1 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 6 | -1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 6 | -1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 6 | -1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 6 | -1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 6 | -1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 6 | -1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 6 | -1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 6 | -1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 6 | -1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 6 | -1 | 32 |  |
| `sourceformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `CeOS` | 11 | -1 | 2000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## cm_level_curve

Binary code: `HUWo`. Record type: `Fc27Record<'cm_level_curve', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 | Yes |
| `curveid` | `number` | `DBOFIELDTYPE_INTEGER` | `hAeZ` | 8 | 0 | 255 |  |

## cm_level_curve_progress

Binary code: `iQRc`. Record type: `Fc27Record<'cm_level_curve_progress', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `apearned` | `number` | `DBOFIELDTYPE_INTEGER` | `BNWS` | 19 | 0 | 500000 |  |
| `curveid` | `number` | `DBOFIELDTYPE_INTEGER` | `hAeZ` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 13 | 0 | 5000 | Yes |
| `level` | `number` | `DBOFIELDTYPE_INTEGER` | `paPI` | 8 | 0 | 255 |  |
| `signatureperkunlockorder` | `number` | `DBOFIELDTYPE_INTEGER` | `GlYg` | 8 | 0 | 255 |  |
| `xprequired` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBTw` | 24 | 0 | 9500000 |  |

## cm_mentalities

Binary code: `emmj`. Record type: `Fc27Record<'cm_mentalities', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `activetactic` | `number` | `DBOFIELDTYPE_INTEGER` | `vUzn` | 1 | 0 | 1 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 16 | 0 | 65365 | Yes |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `code` | `string` | `DBOFIELDTYPE_STRING` | `SOcW` | 144 | 0 | 0 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `mentalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `AwZu` | 13 | 0 | 8000 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 2 | -1 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 6 | -1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 6 | -1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 6 | -1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 6 | -1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 6 | -1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 6 | -1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 6 | -1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 6 | -1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 6 | -1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 6 | -1 | 32 |  |
| `presetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ilsg` | 13 | 0 | 5000 |  |
| `sourceformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `CeOS` | 19 | -1 | 300000 |  |
| `tactic_name` | `string` | `DBOFIELDTYPE_STRING` | `KAOA` | 640 | 0 | 0 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `jfDM` | 10 | -1 | 800 |  |

## cm_min_max_attributes

Binary code: `URiy`. Record type: `Fc27Record<'cm_min_max_attributes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `default` | `number` | `DBOFIELDTYPE_INTEGER` | `npHF` | 8 | 0 | 255 |  |
| `max` | `number` | `DBOFIELDTYPE_INTEGER` | `KODr` | 8 | 0 | 255 |  |
| `min` | `number` | `DBOFIELDTYPE_INTEGER` | `SbEu` | 8 | 0 | 255 |  |
| `minmaxattributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `nARn` | 13 | 0 | 5000 | Yes |

## cm_role_synergies

Binary code: `tODa`. Record type: `Fc27Record<'cm_role_synergies', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 13 | 0 | 5000 | Yes |
| `positionid` | `number` | `DBOFIELDTYPE_INTEGER` | `XyZq` | 8 | 0 | 255 |  |
| `roleid` | `number` | `DBOFIELDTYPE_INTEGER` | `euJp` | 8 | 0 | 255 |  |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |
| `value` | `number` | `DBOFIELDTYPE_INTEGER` | `SbfX` | 8 | 0 | 255 |  |

## cm_specialization_attribute_req

Binary code: `HHEc`. Record type: `Fc27Record<'cm_specialization_attribute_req', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `attributevalue` | `number` | `DBOFIELDTYPE_INTEGER` | `HPNP` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 13 | 0 | 5000 | Yes |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |

## cm_teamsheets

Binary code: `zdMM`. Record type: `Fc27Record<'cm_teamsheets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 9 | 0 | 400 | Yes |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | -1 | 500000 |  |
| `cksupport1` | `number` | `DBOFIELDTYPE_INTEGER` | `tFoZ` | 19 | -1 | 500000 |  |
| `cksupport2` | `number` | `DBOFIELDTYPE_INTEGER` | `cwNn` | 19 | -1 | 500000 |  |
| `cksupport3` | `number` | `DBOFIELDTYPE_INTEGER` | `nzJx` | 19 | -1 | 500000 |  |
| `cksupport4` | `number` | `DBOFIELDTYPE_INTEGER` | `pbQy` | 19 | -1 | 500000 |  |
| `cksupport5` | `number` | `DBOFIELDTYPE_INTEGER` | `mgAw` | 19 | -1 | 500000 |  |
| `cksupport6` | `number` | `DBOFIELDTYPE_INTEGER` | `XpxO` | 19 | -1 | 500000 |  |
| `cksupport7` | `number` | `DBOFIELDTYPE_INTEGER` | `sitE` | 19 | -1 | 500000 |  |
| `cksupport8` | `number` | `DBOFIELDTYPE_INTEGER` | `gZYN` | 19 | -1 | 500000 |  |
| `cksupport9` | `number` | `DBOFIELDTYPE_INTEGER` | `fSIH` | 19 | -1 | 500000 |  |
| `customsub0in` | `number` | `DBOFIELDTYPE_INTEGER` | `bveC` | 19 | -1 | 500000 |  |
| `customsub0out` | `number` | `DBOFIELDTYPE_INTEGER` | `ohUP` | 19 | -1 | 500000 |  |
| `customsub1in` | `number` | `DBOFIELDTYPE_INTEGER` | `aNgZ` | 19 | -1 | 500000 |  |
| `customsub1out` | `number` | `DBOFIELDTYPE_INTEGER` | `sdHe` | 19 | -1 | 500000 |  |
| `customsub2in` | `number` | `DBOFIELDTYPE_INTEGER` | `cTCk` | 19 | -1 | 500000 |  |
| `customsub2out` | `number` | `DBOFIELDTYPE_INTEGER` | `aoQg` | 19 | -1 | 500000 |  |
| `isfavourite` | `number` | `DBOFIELDTYPE_INTEGER` | `lBkr` | 2 | -1 | 1 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | -1 | 500000 |  |
| `leftfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WLKn` | 19 | -1 | 500000 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | -1 | 500000 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | -1 | 500000 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid11` | `number` | `DBOFIELDTYPE_INTEGER` | `ZaUj` | 19 | -1 | 500000 |  |
| `playerid12` | `number` | `DBOFIELDTYPE_INTEGER` | `UTxV` | 19 | -1 | 500000 |  |
| `playerid13` | `number` | `DBOFIELDTYPE_INTEGER` | `HYBP` | 19 | -1 | 500000 |  |
| `playerid14` | `number` | `DBOFIELDTYPE_INTEGER` | `xckU` | 19 | -1 | 500000 |  |
| `playerid15` | `number` | `DBOFIELDTYPE_INTEGER` | `SfAa` | 19 | -1 | 500000 |  |
| `playerid16` | `number` | `DBOFIELDTYPE_INTEGER` | `PmFc` | 19 | -1 | 500000 |  |
| `playerid17` | `number` | `DBOFIELDTYPE_INTEGER` | `MlJq` | 19 | -1 | 500000 |  |
| `playerid18` | `number` | `DBOFIELDTYPE_INTEGER` | `EyUf` | 19 | -1 | 500000 |  |
| `playerid19` | `number` | `DBOFIELDTYPE_INTEGER` | `bxkp` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid20` | `number` | `DBOFIELDTYPE_INTEGER` | `hozK` | 19 | -1 | 500000 |  |
| `playerid21` | `number` | `DBOFIELDTYPE_INTEGER` | `yrvw` | 19 | -1 | 500000 |  |
| `playerid22` | `number` | `DBOFIELDTYPE_INTEGER` | `fySi` | 19 | -1 | 500000 |  |
| `playerid23` | `number` | `DBOFIELDTYPE_INTEGER` | `gxCc` | 19 | -1 | 500000 |  |
| `playerid24` | `number` | `DBOFIELDTYPE_INTEGER` | `iVHj` | 19 | -1 | 500000 |  |
| `playerid25` | `number` | `DBOFIELDTYPE_INTEGER` | `xODp` | 19 | -1 | 500000 |  |
| `playerid26` | `number` | `DBOFIELDTYPE_INTEGER` | `cHyr` | 19 | -1 | 500000 |  |
| `playerid27` | `number` | `DBOFIELDTYPE_INTEGER` | `jMiF` | 19 | -1 | 500000 |  |
| `playerid28` | `number` | `DBOFIELDTYPE_INTEGER` | `bXPw` | 19 | -1 | 500000 |  |
| `playerid29` | `number` | `DBOFIELDTYPE_INTEGER` | `ocLy` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid30` | `number` | `DBOFIELDTYPE_INTEGER` | `ILuX` | 19 | -1 | 500000 |  |
| `playerid31` | `number` | `DBOFIELDTYPE_INTEGER` | `HQyJ` | 19 | -1 | 500000 |  |
| `playerid32` | `number` | `DBOFIELDTYPE_INTEGER` | `WJDv` | 19 | -1 | 500000 |  |
| `playerid33` | `number` | `DBOFIELDTYPE_INTEGER` | `FCTp` | 19 | -1 | 500000 |  |
| `playerid34` | `number` | `DBOFIELDTYPE_INTEGER` | `LaCu` | 19 | -1 | 500000 |  |
| `playerid35` | `number` | `DBOFIELDTYPE_INTEGER` | `EZGA` | 19 | -1 | 500000 |  |
| `playerid36` | `number` | `DBOFIELDTYPE_INTEGER` | `VgjC` | 19 | -1 | 500000 |  |
| `playerid37` | `number` | `DBOFIELDTYPE_INTEGER` | `GjzQ` | 19 | -1 | 500000 |  |
| `playerid38` | `number` | `DBOFIELDTYPE_INTEGER` | `SAKJ` | 19 | -1 | 500000 |  |
| `playerid39` | `number` | `DBOFIELDTYPE_INTEGER` | `NDOL` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid40` | `number` | `DBOFIELDTYPE_INTEGER` | `fyAg` | 19 | -1 | 500000 |  |
| `playerid41` | `number` | `DBOFIELDTYPE_INTEGER` | `AFka` | 19 | -1 | 500000 |  |
| `playerid42` | `number` | `DBOFIELDTYPE_INTEGER` | `BwJM` | 19 | -1 | 500000 |  |
| `playerid43` | `number` | `DBOFIELDTYPE_INTEGER` | `KrFy` | 19 | -1 | 500000 |  |
| `playerid44` | `number` | `DBOFIELDTYPE_INTEGER` | `cnUF` | 19 | -1 | 500000 |  |
| `playerid45` | `number` | `DBOFIELDTYPE_INTEGER` | `DkET` | 19 | -1 | 500000 |  |
| `playerid46` | `number` | `DBOFIELDTYPE_INTEGER` | `CtBV` | 19 | -1 | 500000 |  |
| `playerid47` | `number` | `DBOFIELDTYPE_INTEGER` | `Juxb` | 19 | -1 | 500000 |  |
| `playerid48` | `number` | `DBOFIELDTYPE_INTEGER` | `VNUO` | 19 | -1 | 500000 |  |
| `playerid49` | `number` | `DBOFIELDTYPE_INTEGER` | `uOEg` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid50` | `number` | `DBOFIELDTYPE_INTEGER` | `mdlt` | 19 | -1 | 500000 |  |
| `playerid51` | `number` | `DBOFIELDTYPE_INTEGER` | `deBn` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `profileid` | `number` | `DBOFIELDTYPE_INTEGER` | `qbEx` | 4 | -1 | 7 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | -1 | 500000 |  |
| `rightfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `TxVD` | 19 | -1 | 500000 |  |
| `sourceformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `CeOS` | 19 | -1 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `jfDM` | 5 | -1 | 15 |  |
| `teamsheetname` | `string` | `DBOFIELDTYPE_STRING` | `TrVp` | 640 | 0 | 0 |  |
| `throwerleft` | `number` | `DBOFIELDTYPE_INTEGER` | `xPHY` | 19 | -1 | 500000 |  |
| `throwerright` | `number` | `DBOFIELDTYPE_INTEGER` | `Uwwk` | 19 | -1 | 500000 |  |

## cmplayers

Binary code: `bqIi`. Record type: `Fc27Record<'cmplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 8 | 0 | 255 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 8 | 0 | 255 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 8 | 0 | 255 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 8 | 0 | 255 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `animfreekickstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `jLuE` | 5 | 0 | 31 |  |
| `animpenaltiesstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `naby` | 5 | 0 | 31 |  |
| `avatarpomid` | `number` | `DBOFIELDTYPE_INTEGER` | `VRvd` | 9 | 0 | 511 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `careerenddate` | `number` | `DBOFIELDTYPE_INTEGER` | `pZgP` | 8 | 1900 | 2035 |  |
| `careerstartdate` | `number` | `DBOFIELDTYPE_INTEGER` | `TLbw` | 8 | 1900 | 2035 |  |
| `commonnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `HDYx` | 16 | 0 | 53500 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `contractvaliduntil` | `number` | `DBOFIELDTYPE_INTEGER` | `qvmK` | 7 | 2000 | 2120 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `defspe` | `number` | `DBOFIELDTYPE_INTEGER` | `aEqa` | 7 | 0 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `driref` | `number` | `DBOFIELDTYPE_INTEGER` | `zNYP` | 7 | 0 | 99 |  |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 1 | 5 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `finishingcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `GFLI` | 17 | 0 | 100000 |  |
| `finishingcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `LwOe` | 17 | 0 | 100000 |  |
| `firstnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `tHlO` | 16 | 0 | 53500 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkglovetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `GReX` | 10 | 0 | 1023 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkkickstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `rJqp` | 2 | 0 | 3 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `gksavetype` | `number` | `DBOFIELDTYPE_INTEGER` | `SJED` | 1 | 0 | 1 |  |
| `goldenage` | `number` | `DBOFIELDTYPE_INTEGER` | `wIYv` | 6 | 10 | 50 |  |
| `growthprofile` | `number` | `DBOFIELDTYPE_INTEGER` | `OwTX` | 4 | 0 | 8 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `hasseasonaljersey` | `number` | `DBOFIELDTYPE_INTEGER` | `iCDR` | 3 | 0 | 7 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 220 |  |
| `icontrait1` | `number` | `DBOFIELDTYPE_INTEGER` | `OjQY` | 30 | 0 | 1073741823 |  |
| `icontrait2` | `number` | `DBOFIELDTYPE_INTEGER` | `PqtG` | 17 | 0 | 131071 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `internationalrep` | `number` | `DBOFIELDTYPE_INTEGER` | `WVsa` | 3 | 1 | 5 |  |
| `iscustomized` | `number` | `DBOFIELDTYPE_INTEGER` | `Oirg` | 1 | 0 | 1 |  |
| `isretiring` | `number` | `DBOFIELDTYPE_INTEGER` | `kvuF` | 1 | 0 | 1 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 2 | 0 | 2 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `jerseystylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `miIB` | 1 | 0 | 1 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `lastnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `QCfa` | 16 | 0 | 53500 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `modeavailability` | `number` | `DBOFIELDTYPE_INTEGER` | `Oetb` | 4 | 0 | 15 |  |
| `modifier` | `number` | `DBOFIELDTYPE_INTEGER` | `isYi` | 4 | -5 | 5 |  |
| `muscularitycode` | `number` | `DBOFIELDTYPE_INTEGER` | `MUYu` | 1 | 0 | 1 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 1 | 99 |  |
| `pacdiv` | `number` | `DBOFIELDTYPE_INTEGER` | `aapy` | 7 | 0 | 99 |  |
| `paskic` | `number` | `DBOFIELDTYPE_INTEGER` | `ceRf` | 7 | 0 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `personality` | `number` | `DBOFIELDTYPE_INTEGER` | `hxxo` | 3 | 1 | 5 |  |
| `phypos` | `number` | `DBOFIELDTYPE_INTEGER` | `hdMV` | 7 | 0 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `playerjerseynameid` | `number` | `DBOFIELDTYPE_INTEGER` | `Vqpv` | 16 | 0 | 53500 |  |
| `playerjointeamdate` | `number` | `DBOFIELDTYPE_DATE` | `vTpl` | 20 | 0 | 1048575 |  |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `preferredfoot` | `number` | `DBOFIELDTYPE_INTEGER` | `MDvm` | 1 | 1 | 2 |  |
| `preferredposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `wZQU` | 5 | 0 | 31 |  |
| `preferredposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `NgVS` | 6 | -1 | 32 |  |
| `preferredposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `OblE` | 6 | -1 | 32 |  |
| `preferredposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `YnYz` | 6 | -1 | 32 |  |
| `preferredposition5` | `number` | `DBOFIELDTYPE_INTEGER` | `rkcN` | 6 | -1 | 32 |  |
| `preferredposition6` | `number` | `DBOFIELDTYPE_INTEGER` | `GdFb` | 6 | -1 | 32 |  |
| `preferredposition7` | `number` | `DBOFIELDTYPE_INTEGER` | `VeVh` | 6 | -1 | 32 |  |
| `previousteamcountryid1` | `number` | `DBOFIELDTYPE_INTEGER` | `kQUV` | 12 | 0 | 3000 |  |
| `previousteamcountryid2` | `number` | `DBOFIELDTYPE_INTEGER` | `lJtT` | 12 | 0 | 3000 |  |
| `previousteamcountryid3` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdd` | 12 | 0 | 3000 |  |
| `previousteamid1` | `number` | `DBOFIELDTYPE_INTEGER` | `FWgd` | 18 | -1 | 200000 |  |
| `previousteamid2` | `number` | `DBOFIELDTYPE_INTEGER` | `EPJb` | 18 | -1 | 200000 |  |
| `previousteamid3` | `number` | `DBOFIELDTYPE_INTEGER` | `HMZV` | 18 | -1 | 200000 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `releaseclause` | `number` | `DBOFIELDTYPE_INTEGER` | `pSzm` | 30 | 0 | 1000000000 |  |
| `role1` | `number` | `DBOFIELDTYPE_INTEGER` | `FYhg` | 8 | 0 | 199 |  |
| `role2` | `number` | `DBOFIELDTYPE_INTEGER` | `ERce` | 8 | 0 | 199 |  |
| `role3` | `number` | `DBOFIELDTYPE_INTEGER` | `HSMQ` | 8 | 0 | 199 |  |
| `role4` | `number` | `DBOFIELDTYPE_INTEGER` | `hGZL` | 8 | 0 | 199 |  |
| `role5` | `number` | `DBOFIELDTYPE_INTEGER` | `yNVZ` | 8 | 0 | 199 |  |
| `role6` | `number` | `DBOFIELDTYPE_INTEGER` | `zUsn` | 8 | 0 | 199 |  |
| `role7` | `number` | `DBOFIELDTYPE_INTEGER` | `MPct` | 8 | 0 | 199 |  |
| `role8` | `number` | `DBOFIELDTYPE_INTEGER` | `YsBk` | 8 | 0 | 199 |  |
| `role9` | `number` | `DBOFIELDTYPE_INTEGER` | `rnxu` | 8 | 0 | 199 |  |
| `runningcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `ZeVz` | 17 | 0 | 100000 |  |
| `runningcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `oXYh` | 17 | 0 | 100000 |  |
| `runstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Tbvt` | 6 | 0 | 32 |  |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 |  |
| `shohan` | `number` | `DBOFIELDTYPE_INTEGER` | `NTFr` | 7 | 0 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skillmoves` | `number` | `DBOFIELDTYPE_INTEGER` | `BAPc` | 3 | 0 | 4 |  |
| `skillmoveslikelihood` | `number` | `DBOFIELDTYPE_INTEGER` | `PJsq` | 3 | 0 | 4 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 11 | 0 | 2047 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 10 | 0 | 1023 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 10 | 0 | 1023 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 10 | 0 | 1023 |  |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 10 | 0 | 1023 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 10 | 0 | 1023 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 10 | 0 | 1023 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 10 | 0 | 1023 |  |
| `trait1` | `number` | `DBOFIELDTYPE_INTEGER` | `juxV` | 30 | 0 | 1073741823 |  |
| `trait2` | `number` | `DBOFIELDTYPE_INTEGER` | `inAr` | 17 | 0 | 131071 |  |
| `undershortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `KCeP` | 1 | 0 | 1 |  |
| `usercaneditname` | `number` | `DBOFIELDTYPE_INTEGER` | `NBsd` | 1 | 0 | 1 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |
| `wage` | `number` | `DBOFIELDTYPE_INTEGER` | `cmGX` | 27 | 0 | 100000000 |  |
| `weakfootabilitytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `aOBn` | 3 | 1 | 5 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 150 |  |

## commentarynames

Binary code: `PrWZ`. Record type: `Fc27Record<'commentarynames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 20 | 0 | 1000000 | Yes |
| `commentarypreview` | `number` | `DBOFIELDTYPE_INTEGER` | `hiQy` | 1 | 0 | 1 |  |
| `commentarystartingletter` | `number` | `DBOFIELDTYPE_INTEGER` | `LZXw` | 5 | 1 | 26 |  |
| `commentarystring` | `string` | `DBOFIELDTYPE_STRING` | `IfNF` | 360 | 0 | 0 |  |

## competition

Binary code: `FMpz`. Record type: `Fc27Record<'competition', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `abbapenalties` | `number` | `DBOFIELDTYPE_INTEGER` | `LxhF` | 1 | 0 | 1 |  |
| `adboardplacement` | `number` | `DBOFIELDTYPE_INTEGER` | `mEvK` | 4 | 0 | 15 |  |
| `adboardplacementstage` | `number` | `DBOFIELDTYPE_INTEGER` | `sGFp` | 4 | 0 | 15 |  |
| `authentictarpadboarda` | `number` | `DBOFIELDTYPE_INTEGER` | `WkTt` | 5 | 0 | 16 |  |
| `authentictarpadboardb` | `number` | `DBOFIELDTYPE_INTEGER` | `ndOL` | 5 | 0 | 16 |  |
| `authenticwipeid` | `number` | `DBOFIELDTYPE_INTEGER` | `XPMD` | 6 | 0 | 60 |  |
| `badge_chest` | `number` | `DBOFIELDTYPE_INTEGER` | `whZn` | 24 | -1 | 9999999 |  |
| `badge_chest_champions` | `number` | `DBOFIELDTYPE_INTEGER` | `xNEj` | 24 | -1 | 9999999 |  |
| `badge_ls` | `number` | `DBOFIELDTYPE_INTEGER` | `QMAF` | 24 | -1 | 9999999 |  |
| `badge_ls_champions` | `number` | `DBOFIELDTYPE_INTEGER` | `Wwfk` | 24 | -1 | 9999999 |  |
| `badge_rs` | `number` | `DBOFIELDTYPE_INTEGER` | `sBHW` | 24 | -1 | 9999999 |  |
| `badge_rs_champions` | `number` | `DBOFIELDTYPE_INTEGER` | `PVFq` | 24 | -1 | 9999999 |  |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 |  |
| `celebrationarchedboard` | `number` | `DBOFIELDTYPE_INTEGER` | `wttu` | 2 | 0 | 2 |  |
| `celebrationbackboard` | `number` | `DBOFIELDTYPE_INTEGER` | `qnKo` | 2 | 0 | 2 |  |
| `celebrationmediapen` | `number` | `DBOFIELDTYPE_INTEGER` | `bbRB` | 1 | 0 | 1 |  |
| `celebrationsponsorboard` | `number` | `DBOFIELDTYPE_INTEGER` | `ktYC` | 2 | 0 | 2 |  |
| `celebrationstage` | `number` | `DBOFIELDTYPE_INTEGER` | `ffts` | 2 | 0 | 2 |  |
| `colorregion` | `number` | `DBOFIELDTYPE_INTEGER` | `sseO` | 5 | 0 | 31 |  |
| `competitionchampionid` | `number` | `DBOFIELDTYPE_INTEGER` | `BcJx` | 18 | -1 | 200000 |  |
| `competitioncolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `LptT` | 8 | 0 | 255 |  |
| `competitioncolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `HzNE` | 8 | 0 | 255 |  |
| `competitioncolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `eaJf` | 8 | 0 | 255 |  |
| `competitioncolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `oISg` | 8 | 0 | 255 |  |
| `competitioncolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `wWiT` | 8 | 0 | 255 |  |
| `competitioncolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `trCQ` | 8 | 0 | 255 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 | Yes |
| `competitionimportance` | `number` | `DBOFIELDTYPE_INTEGER` | `nYJI` | 4 | 0 | 15 |  |
| `cornerflagpolecolorenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `wUkb` | 1 | 0 | 1 |  |
| `country_lock` | `number` | `DBOFIELDTYPE_INTEGER` | `VYuP` | 12 | -1 | 3000 |  |
| `crowdregion` | `number` | `DBOFIELDTYPE_INTEGER` | `Edjp` | 5 | 0 | 31 |  |
| `crowdskintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `KvHw` | 7 | 0 | 100 |  |
| `custombibs` | `number` | `DBOFIELDTYPE_INTEGER` | `Tfsc` | 1 | 0 | 1 |  |
| `customcornerflagpoledesign` | `number` | `DBOFIELDTYPE_INTEGER` | `fSrS` | 2 | 0 | 2 |  |
| `finalballid` | `number` | `DBOFIELDTYPE_INTEGER` | `JfMJ` | 11 | -1 | 1023 |  |
| `finalstadium` | `number` | `DBOFIELDTYPE_INTEGER` | `boxi` | 11 | 0 | 2000 |  |
| `g4subsonbench` | `number` | `DBOFIELDTYPE_INTEGER` | `IJaP` | 3 | 0 | 7 |  |
| `g5subsonbench` | `number` | `DBOFIELDTYPE_INTEGER` | `rIaU` | 4 | 0 | 9 |  |
| `goaljingle` | `number` | `DBOFIELDTYPE_INTEGER` | `yTFE` | 1 | 0 | 1 |  |
| `goalnetads` | `number` | `DBOFIELDTYPE_INTEGER` | `Daqz` | 1 | 0 | 1 |  |
| `goalscoringrecord` | `number` | `DBOFIELDTYPE_INTEGER` | `lWCv` | 8 | 0 | 200 |  |
| `has_var` | `number` | `DBOFIELDTYPE_INTEGER` | `NlGk` | 1 | 0 | 1 |  |
| `hasauthentictarpads` | `number` | `DBOFIELDTYPE_INTEGER` | `OVvg` | 1 | 0 | 1 |  |
| `haslargeflag` | `number` | `DBOFIELDTYPE_INTEGER` | `QgOx` | 1 | 0 | 1 |  |
| `hasmascot` | `number` | `DBOFIELDTYPE_INTEGER` | `KUrV` | 1 | 0 | 1 |  |
| `hasmediarope` | `number` | `DBOFIELDTYPE_INTEGER` | `YXKB` | 2 | 0 | 2 |  |
| `hasstandingcrowd` | `number` | `DBOFIELDTYPE_INTEGER` | `NOYS` | 1 | 0 | 1 |  |
| `hastrophy` | `number` | `DBOFIELDTYPE_INTEGER` | `MCmI` | 1 | 0 | 1 |  |
| `hasvikingclap` | `number` | `DBOFIELDTYPE_INTEGER` | `VsCG` | 1 | 0 | 1 |  |
| `inflatables` | `number` | `DBOFIELDTYPE_INTEGER` | `jXld` | 13 | 0 | 8191 |  |
| `introanthemidle` | `number` | `DBOFIELDTYPE_INTEGER` | `dVuL` | 1 | 0 | 1 |  |
| `introconfetti` | `number` | `DBOFIELDTYPE_INTEGER` | `oVAO` | 1 | 0 | 1 |  |
| `introteamportrait` | `number` | `DBOFIELDTYPE_INTEGER` | `Yxav` | 1 | 0 | 1 |  |
| `isarchwayenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `ihFa` | 4 | 0 | 15 |  |
| `isarchwayenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `HEBy` | 4 | 0 | 15 |  |
| `isballplinthenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `cAOv` | 4 | 0 | 15 |  |
| `isballplinthenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `WpQQ` | 4 | 0 | 15 |  |
| `isbannerenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `uhiM` | 1 | 0 | 1 |  |
| `iscenterpitchflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `iYhp` | 4 | 0 | 15 |  |
| `iscenterpitchflagenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `ohEW` | 4 | 0 | 15 |  |
| `ischampionboardenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `pqzM` | 2 | 0 | 2 |  |
| `iscompetitioncrowdcardsenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `FtgW` | 4 | 0 | 15 |  |
| `iscompetitionpoleflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `eLCT` | 4 | 0 | 15 |  |
| `iscompetitionscarfenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `VtHL` | 1 | 0 | 1 |  |
| `isflamethrowercannonsenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `QATV` | 4 | 0 | 15 |  |
| `isflamethrowercannonsenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `wCvf` | 4 | 0 | 15 |  |
| `isgoallinetechcompenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `JFLa` | 4 | 0 | 15 |  |
| `isgoallinetechcompenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `TveF` | 4 | 0 | 15 |  |
| `isgoallinetechhomeleagueenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `AfBr` | 4 | 0 | 15 |  |
| `isgoalnetadsenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `QLFy` | 4 | 0 | 15 |  |
| `ishandshakeboardenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `RDrP` | 2 | 0 | 3 |  |
| `isinjuryboardenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `oUMd` | 1 | 0 | 1 |  |
| `isintroconfettienabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `UBVd` | 4 | 0 | 15 |  |
| `ispitchtarpsenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `OLCn` | 4 | 0 | 15 |  |
| `isrealcompetition` | `number` | `DBOFIELDTYPE_INTEGER` | `eWCc` | 1 | 0 | 1 |  |
| `isstadiumdressingenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `MwHy` | 4 | 0 | 15 |  |
| `isstadiumdressingenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `mobF` | 4 | 0 | 15 |  |
| `isstadiumdressingunique` | `number` | `DBOFIELDTYPE_INTEGER` | `Crne` | 4 | 0 | 15 |  |
| `isstadiumdressinguniquestage` | `number` | `DBOFIELDTYPE_INTEGER` | `eULp` | 4 | 0 | 15 |  |
| `isstanchionflamethrowerenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `wdPC` | 4 | 0 | 15 |  |
| `isteampitchflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `KnRV` | 4 | 0 | 15 |  |
| `isteampitchflagenabledstage` | `number` | `DBOFIELDTYPE_INTEGER` | `yyuB` | 4 | 0 | 15 |  |
| `isuniqueadboardscompenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `CILP` | 1 | 0 | 1 |  |
| `isuniquetrophypedestalenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `ccXc` | 4 | 0 | 15 |  |
| `isvanishingsprayenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `lMgi` | 4 | 0 | 15 |  |
| `isvanishingsprayhomeenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `RFDf` | 4 | 0 | 15 |  |
| `iswomencompetition` | `number` | `DBOFIELDTYPE_INTEGER` | `SDHe` | 1 | 0 | 1 |  |
| `languageregion` | `number` | `DBOFIELDTYPE_INTEGER` | `KPAn` | 5 | 1 | 25 |  |
| `lowerstadiumdressing` | `number` | `DBOFIELDTYPE_INTEGER` | `zYde` | 1 | 0 | 1 |  |
| `onpitchgraphics` | `number` | `DBOFIELDTYPE_INTEGER` | `lbCw` | 1 | 0 | 1 |  |
| `pitchbranding` | `number` | `DBOFIELDTYPE_INTEGER` | `foOq` | 1 | 0 | 1 |  |
| `pitchtarps` | `number` | `DBOFIELDTYPE_INTEGER` | `rtiM` | 3 | 0 | 5 |  |
| `player_display_pts` | `number` | `DBOFIELDTYPE_INTEGER` | `vgTY` | 2 | 0 | 3 |  |
| `player_display_ptw_tr` | `number` | `DBOFIELDTYPE_INTEGER` | `FGrd` | 1 | 0 | 1 |  |
| `presassettwo` | `number` | `DBOFIELDTYPE_INTEGER` | `UjYK` | 2 | 0 | 2 |  |
| `replay360degree` | `number` | `DBOFIELDTYPE_INTEGER` | `JVFc` | 1 | 0 | 1 |  |
| `stadiumcrowdmap` | `number` | `DBOFIELDTYPE_INTEGER` | `kyyr` | 4 | 0 | 15 |  |
| `stanchionflamethrower` | `number` | `DBOFIELDTYPE_INTEGER` | `XDPj` | 1 | 0 | 1 |  |
| `winterballid` | `number` | `DBOFIELDTYPE_INTEGER` | `mJJD` | 11 | -1 | 1023 |  |

## competitionbadges

Binary code: `Qxjv`. Record type: `Fc27Record<'competitionbadges', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `badgeid` | `number` | `DBOFIELDTYPE_INTEGER` | `YtDs` | 24 | 0 | 9999999 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 | Yes |
| `placement` | `number` | `DBOFIELDTYPE_INTEGER` | `AqxB` | 5 | 0 | 31 |  |
| `priority` | `number` | `DBOFIELDTYPE_INTEGER` | `LBdc` | 5 | 1 | 32 |  |
| `target` | `number` | `DBOFIELDTYPE_INTEGER` | `hHvj` | 4 | 0 | 15 |  |
| `threshold` | `number` | `DBOFIELDTYPE_INTEGER` | `vvGh` | 24 | 0 | 9999999 |  |

## competitionballs

Binary code: `SWFH`. Record type: `Fc27Record<'competitionballs', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 | Yes |
| `stage` | `number` | `DBOFIELDTYPE_INTEGER` | `JkkO` | 4 | 0 | 9 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 2 | 0 | 3 |  |

## competitionkits

Binary code: `brHl`. Record type: `Fc27Record<'competitionkits', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 |  |
| `jerseybacknamefontcase` | `number` | `DBOFIELDTYPE_INTEGER` | `LZNA` | 2 | 0 | 2 |  |
| `jerseybacknameplacementcode` | `number` | `DBOFIELDTYPE_INTEGER` | `vMtY` | 8 | 0 | 255 |  |
| `jerseyfrontnumberplacementcode` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaE` | 8 | 0 | 255 |  |
| `jerseynamecolorb` | `number` | `DBOFIELDTYPE_INTEGER` | `Uggt` | 8 | 0 | 255 |  |
| `jerseynamecolorg` | `number` | `DBOFIELDTYPE_INTEGER` | `MSIa` | 8 | 0 | 255 |  |
| `jerseynamecolorr` | `number` | `DBOFIELDTYPE_INTEGER` | `tvQp` | 8 | 0 | 255 |  |
| `jerseynamefonttype` | `number` | `DBOFIELDTYPE_INTEGER` | `TEgR` | 9 | 0 | 511 |  |
| `jerseynamelayouttype` | `number` | `DBOFIELDTYPE_INTEGER` | `bieS` | 8 | 0 | 255 |  |
| `jerseynameoutlinecolorb` | `number` | `DBOFIELDTYPE_INTEGER` | `Rjqb` | 8 | 0 | 255 |  |
| `jerseynameoutlinecolorg` | `number` | `DBOFIELDTYPE_INTEGER` | `JZus` | 8 | 0 | 255 |  |
| `jerseynameoutlinecolorr` | `number` | `DBOFIELDTYPE_INTEGER` | `wsGP` | 8 | 0 | 255 |  |
| `jerseynameoutlinewidth` | `number` | `DBOFIELDTYPE_INTEGER` | `ZqLl` | 4 | 0 | 9 |  |
| `jerseynumbercolorprimb` | `number` | `DBOFIELDTYPE_INTEGER` | `fpEX` | 8 | 0 | 255 |  |
| `jerseynumbercolorprimg` | `number` | `DBOFIELDTYPE_INTEGER` | `bXAI` | 8 | 0 | 255 |  |
| `jerseynumbercolorprimr` | `number` | `DBOFIELDTYPE_INTEGER` | `GCoH` | 8 | 0 | 255 |  |
| `jerseynumbercolorsecb` | `number` | `DBOFIELDTYPE_INTEGER` | `Jjet` | 8 | 0 | 255 |  |
| `jerseynumbercolorsecg` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZGe` | 8 | 0 | 255 |  |
| `jerseynumbercolorsecr` | `number` | `DBOFIELDTYPE_INTEGER` | `gsuF` | 8 | 0 | 255 |  |
| `jerseynumbercolorterb` | `number` | `DBOFIELDTYPE_INTEGER` | `jpFw` | 8 | 0 | 255 |  |
| `jerseynumbercolorterg` | `number` | `DBOFIELDTYPE_INTEGER` | `bLBP` | 8 | 0 | 255 |  |
| `jerseynumbercolorterr` | `number` | `DBOFIELDTYPE_INTEGER` | `eCpU` | 8 | 0 | 255 |  |
| `numberfonttype` | `number` | `DBOFIELDTYPE_INTEGER` | `iNiN` | 9 | 0 | 511 |  |
| `shortsnumbercolorprimb` | `number` | `DBOFIELDTYPE_INTEGER` | `uAKR` | 8 | 0 | 255 |  |
| `shortsnumbercolorprimg` | `number` | `DBOFIELDTYPE_INTEGER` | `myaC` | 8 | 0 | 255 |  |
| `shortsnumbercolorprimr` | `number` | `DBOFIELDTYPE_INTEGER` | `TPaN` | 8 | 0 | 255 |  |
| `shortsnumbercolorsecb` | `number` | `DBOFIELDTYPE_INTEGER` | `JtVK` | 8 | 0 | 255 |  |
| `shortsnumbercolorsecg` | `number` | `DBOFIELDTYPE_INTEGER` | `NTld` | 8 | 0 | 255 |  |
| `shortsnumbercolorsecr` | `number` | `DBOFIELDTYPE_INTEGER` | `wGly` | 8 | 0 | 255 |  |
| `shortsnumbercolorterb` | `number` | `DBOFIELDTYPE_INTEGER` | `XvaL` | 8 | 0 | 255 |  |
| `shortsnumbercolorterg` | `number` | `DBOFIELDTYPE_INTEGER` | `zJKo` | 8 | 0 | 255 |  |
| `shortsnumbercolorterr` | `number` | `DBOFIELDTYPE_INTEGER` | `CUKn` | 8 | 0 | 255 |  |
| `shortsnumberfonttype` | `number` | `DBOFIELDTYPE_INTEGER` | `Vyfr` | 9 | 0 | 511 |  |
| `shortsnumberplacementcode` | `number` | `DBOFIELDTYPE_INTEGER` | `zdlB` | 8 | 0 | 255 |  |
| `teamkittypetechid` | `number` | `DBOFIELDTYPE_INTEGER` | `MlXB` | 5 | 0 | 22 |  |
| `teamtechid` | `number` | `DBOFIELDTYPE_INTEGER` | `qljg` | 18 | -1 | 200000 | Yes |
| `year` | `number` | `DBOFIELDTYPE_INTEGER` | `qFnd` | 11 | 0 | 2027 |  |

## competitionmatchups

Binary code: `VHaB`. Record type: `Fc27Record<'competitionmatchups', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `awayteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `entq` | 18 | -1 | 200000 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 |  |
| `homepotid` | `number` | `DBOFIELDTYPE_INTEGER` | `VXMX` | 5 | 0 | 31 |  |
| `hometeamid` | `number` | `DBOFIELDTYPE_INTEGER` | `KbVA` | 18 | -1 | 200000 |  |
| `matchupid` | `number` | `DBOFIELDTYPE_INTEGER` | `iMGO` | 10 | 1 | 1000 | Yes |

## competitionrefereekits

Binary code: `MsTi`. Record type: `Fc27Record<'competitionrefereekits', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 | Yes |
| `refereekit` | `number` | `DBOFIELDTYPE_INTEGER` | `aSGN` | 14 | -1 | 9999 |  |

## competitionseeds

Binary code: `fMpR`. Record type: `Fc27Record<'competitionseeds', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 | Yes |
| `group` | `number` | `DBOFIELDTYPE_INTEGER` | `OAja` | 6 | 1 | 64 |  |
| `groupslot` | `number` | `DBOFIELDTYPE_INTEGER` | `Kilj` | 2 | 1 | 4 |  |
| `isqualified` | `number` | `DBOFIELDTYPE_INTEGER` | `ntxZ` | 1 | 0 | 1 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## competitionsponsorlinks

Binary code: `AqBt`. Record type: `Fc27Record<'competitionsponsorlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adsponserid` | `number` | `DBOFIELDTYPE_INTEGER` | `Laxd` | 13 | 0 | 8191 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 13 | 0 | 8191 | Yes |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 13 | -1 | 4096 |  |
| `dynamicimageid` | `number` | `DBOFIELDTYPE_INTEGER` | `zlDt` | 13 | 0 | 8191 |  |
| `isapproved` | `number` | `DBOFIELDTYPE_INTEGER` | `McUr` | 1 | 0 | 1 |  |

## competitionstadiumlinks

Binary code: `nVuT`. Record type: `Fc27Record<'competitionstadiumlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 | Yes |
| `iscupfinal` | `number` | `DBOFIELDTYPE_INTEGER` | `UgZN` | 1 | 0 | 1 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 11 | -1 | 2000 |  |

## competitionuefasponsors

Binary code: `qmil`. Record type: `Fc27Record<'competitionuefasponsors', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 |  |
| `leftbadgeid` | `number` | `DBOFIELDTYPE_INTEGER` | `oQnh` | 24 | 0 | 9999999 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `teamname` | `string` | `DBOFIELDTYPE_STRING` | `AUsv` | 480 | 0 | 0 |  |

## cp_fat

Binary code: `dMwM`. Record type: `Fc27Record<'cp_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |

## cp_flesh

Binary code: `qsGz`. Record type: `Fc27Record<'cp_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |

## cp_skeletal

Binary code: `Hrbq`. Record type: `Fc27Record<'cp_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 8 | -127 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |

## createplayer

Binary code: `SPTx`. Record type: `Fc27Record<'createplayer', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `celebrationid` | `number` | `DBOFIELDTYPE_INTEGER` | `IiYd` | 4 | 0 | 15 |  |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 20 | -1 | 1000000 |  |
| `cpmorph_surfacepack_1` | `number` | `DBOFIELDTYPE_INTEGER` | `QvSL` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_2` | `number` | `DBOFIELDTYPE_INTEGER` | `RmXd` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_3` | `number` | `DBOFIELDTYPE_INTEGER` | `utbj` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_4` | `number` | `DBOFIELDTYPE_INTEGER` | `UJSo` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_5` | `number` | `DBOFIELDTYPE_INTEGER` | `LKii` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_6` | `number` | `DBOFIELDTYPE_INTEGER` | `KTLE` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_7` | `number` | `DBOFIELDTYPE_INTEGER` | `BQPq` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_8` | `number` | `DBOFIELDTYPE_INTEGER` | `NTiz` | 11 | 0 | 1024 |  |
| `create_artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `RzAo` | 19 | 0 | 500000 | Yes |
| `create_originalplayerid` | `number` | `DBOFIELDTYPE_INTEGER` | `pXwC` | 19 | 0 | 500000 |  |
| `create_playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `JAOM` | 19 | 0 | 500000 |  |
| `personaid` | `number` | `DBOFIELDTYPE_INTEGER` | `rrra` | 32 | -1 | 2147483647 |  |
| `photofit` | `number` | `DBOFIELDTYPE_INTEGER` | `BALc` | 1 | 0 | 1 |  |
| `skincolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KTDQ` | 32 | -1 | 2147483647 |  |

## createplayerpositiontemplates

Binary code: `Flrt`. Record type: `Fc27Record<'createplayerpositiontemplates', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 250 | Yes |
| `attributevalue` | `number` | `DBOFIELDTYPE_INTEGER` | `HPNP` | 7 | 0 | 100 |  |
| `positionid` | `number` | `DBOFIELDTYPE_INTEGER` | `XyZq` | 7 | 0 | 100 |  |

## createplayerpresets

Binary code: `lNVH`. Record type: `Fc27Record<'createplayerpresets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 7 | 0 | 100 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 7 | 0 | 100 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 7 | 0 | 100 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 7 | 0 | 100 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 9 | 0 | 404 | Yes |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `cpmorph_surfacepack_1` | `number` | `DBOFIELDTYPE_INTEGER` | `QvSL` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_2` | `number` | `DBOFIELDTYPE_INTEGER` | `RmXd` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_3` | `number` | `DBOFIELDTYPE_INTEGER` | `utbj` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_4` | `number` | `DBOFIELDTYPE_INTEGER` | `UJSo` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_5` | `number` | `DBOFIELDTYPE_INTEGER` | `LKii` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_6` | `number` | `DBOFIELDTYPE_INTEGER` | `KTLE` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_7` | `number` | `DBOFIELDTYPE_INTEGER` | `BQPq` | 11 | 0 | 1024 |  |
| `cpmorph_surfacepack_8` | `number` | `DBOFIELDTYPE_INTEGER` | `NTiz` | 11 | 0 | 1024 |  |
| `ethnicity` | `number` | `DBOFIELDTYPE_INTEGER` | `aArc` | 5 | -1 | 15 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 4 | 1 | 16 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkglovetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `GReX` | 7 | 0 | 127 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `hasseasonaljersey` | `number` | `DBOFIELDTYPE_INTEGER` | `iCDR` | 3 | 0 | 7 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 2 | 0 | 2 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `jerseystylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `miIB` | 1 | 0 | 1 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `presettype` | `number` | `DBOFIELDTYPE_INTEGER` | `dPtA` | 7 | 0 | 99 |  |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 10 | 0 | 1000 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KTDQ` | 32 | -1 | 2147483647 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 10 | 0 | 1000 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 10 | 0 | 1023 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 10 | 0 | 1023 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 10 | 0 | 1023 |  |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 10 | 0 | 1023 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 10 | 0 | 1023 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 10 | 0 | 1023 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 10 | 0 | 1023 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 115 |  |

## createplayerpresets_link

Binary code: `TMTO`. Record type: `Fc27Record<'createplayerpresets_link', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `player_id` | `number` | `DBOFIELDTYPE_INTEGER` | `dSDw` | 10 | 58001 | 59000 | Yes |
| `preset_id` | `number` | `DBOFIELDTYPE_INTEGER` | `AEMY` | 8 | 0 | 255 |  |

## createplayerviews

Binary code: `nJco`. Record type: `Fc27Record<'createplayerviews', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 250 | Yes |
| `mainviewid` | `number` | `DBOFIELDTYPE_INTEGER` | `YyuZ` | 7 | -1 | 99 |  |

## crowdaccessories

Binary code: `AUCA`. Record type: `Fc27Record<'crowdaccessories', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessorytype` | `number` | `DBOFIELDTYPE_INTEGER` | `nelv` | 19 | 0 | 500000 |  |
| `age` | `number` | `DBOFIELDTYPE_INTEGER` | `SgJQ` | 19 | 0 | 500000 |  |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `crowdid` | `number` | `DBOFIELDTYPE_INTEGER` | `drco` | 19 | 0 | 500000 |  |
| `derivativeid` | `number` | `DBOFIELDTYPE_INTEGER` | `GQmY` | 19 | 0 | 500000 |  |
| `idaccessory` | `number` | `DBOFIELDTYPE_INTEGER` | `fUtD` | 19 | 0 | 500000 | Yes |
| `skintone` | `number` | `DBOFIELDTYPE_INTEGER` | `feDA` | 19 | 0 | 500000 |  |
| `tint` | `number` | `DBOFIELDTYPE_INTEGER` | `fijm` | 19 | -1 | 500000 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 19 | 0 | 500000 |  |

## crowdbodies

Binary code: `OjyS`. Record type: `Fc27Record<'crowdbodies', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `chapter` | `number` | `DBOFIELDTYPE_INTEGER` | `NmSw` | 19 | 0 | 500000 |  |
| `crowdid` | `number` | `DBOFIELDTYPE_INTEGER` | `drco` | 19 | 0 | 500000 |  |
| `hasjersey` | `number` | `DBOFIELDTYPE_INTEGER` | `ihdj` | 19 | 0 | 500000 |  |
| `idbody` | `number` | `DBOFIELDTYPE_INTEGER` | `vPad` | 19 | 0 | 500000 | Yes |
| `issuperfan` | `number` | `DBOFIELDTYPE_INTEGER` | `kGWo` | 19 | 0 | 500000 |  |
| `skintone` | `number` | `DBOFIELDTYPE_INTEGER` | `feDA` | 19 | 0 | 500000 |  |
| `skintonevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `CEgz` | 19 | 0 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 19 | 0 | 500000 |  |
| `tint` | `number` | `DBOFIELDTYPE_INTEGER` | `fijm` | 19 | -1 | 500000 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 19 | 0 | 500000 |  |

## crowdhairs

Binary code: `velI`. Record type: `Fc27Record<'crowdhairs', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessorytype` | `number` | `DBOFIELDTYPE_INTEGER` | `nelv` | 19 | 0 | 500000 |  |
| `age` | `number` | `DBOFIELDTYPE_INTEGER` | `SgJQ` | 19 | 0 | 500000 |  |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `chapter` | `number` | `DBOFIELDTYPE_INTEGER` | `NmSw` | 19 | 0 | 500000 |  |
| `crowdid` | `number` | `DBOFIELDTYPE_INTEGER` | `drco` | 19 | 0 | 500000 |  |
| `derivativeid` | `number` | `DBOFIELDTYPE_INTEGER` | `GQmY` | 19 | 0 | 500000 |  |
| `idhair` | `number` | `DBOFIELDTYPE_INTEGER` | `ocMa` | 19 | 0 | 500000 | Yes |
| `skintone` | `number` | `DBOFIELDTYPE_INTEGER` | `feDA` | 19 | 0 | 500000 |  |
| `tint` | `number` | `DBOFIELDTYPE_INTEGER` | `fijm` | 19 | -1 | 500000 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 19 | 0 | 500000 |  |

## crowdheads

Binary code: `qvyg`. Record type: `Fc27Record<'crowdheads', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `age` | `number` | `DBOFIELDTYPE_INTEGER` | `SgJQ` | 19 | 0 | 500000 |  |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `chapter` | `number` | `DBOFIELDTYPE_INTEGER` | `NmSw` | 19 | 0 | 500000 |  |
| `crowdid` | `number` | `DBOFIELDTYPE_INTEGER` | `drco` | 19 | 0 | 500000 |  |
| `derivativeid` | `number` | `DBOFIELDTYPE_INTEGER` | `GQmY` | 19 | 0 | 500000 |  |
| `idhead` | `number` | `DBOFIELDTYPE_INTEGER` | `bgTz` | 19 | 0 | 500000 | Yes |
| `shopkeeper` | `number` | `DBOFIELDTYPE_INTEGER` | `jODt` | 19 | 0 | 500000 |  |
| `skintone` | `number` | `DBOFIELDTYPE_INTEGER` | `feDA` | 19 | 0 | 500000 |  |
| `tint` | `number` | `DBOFIELDTYPE_INTEGER` | `fijm` | 19 | -1 | 500000 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 19 | 0 | 500000 |  |

## crowdoldsystem

Binary code: `VhQO`. Record type: `Fc27Record<'crowdoldsystem', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessory` | `number` | `DBOFIELDTYPE_INTEGER` | `dsVP` | 19 | 0 | 500000 |  |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `chapter` | `number` | `DBOFIELDTYPE_INTEGER` | `NmSw` | 19 | 0 | 500000 |  |
| `coffee` | `number` | `DBOFIELDTYPE_INTEGER` | `sJBU` | 19 | 0 | 500000 |  |
| `dj` | `number` | `DBOFIELDTYPE_INTEGER` | `cCIN` | 19 | 0 | 500000 |  |
| `fan` | `number` | `DBOFIELDTYPE_INTEGER` | `mrtf` | 19 | 0 | 500000 |  |
| `freestyle` | `number` | `DBOFIELDTYPE_INTEGER` | `HwMG` | 19 | 0 | 500000 |  |
| `grill` | `number` | `DBOFIELDTYPE_INTEGER` | `hgOL` | 19 | 0 | 500000 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 19 | 0 | 500000 | Yes |
| `old` | `number` | `DBOFIELDTYPE_INTEGER` | `IFBv` | 19 | 0 | 500000 |  |
| `phone` | `number` | `DBOFIELDTYPE_INTEGER` | `nfgi` | 19 | 0 | 500000 |  |
| `plazafan` | `number` | `DBOFIELDTYPE_INTEGER` | `BRkP` | 19 | 0 | 500000 |  |
| `rain` | `number` | `DBOFIELDTYPE_INTEGER` | `eBCf` | 19 | 0 | 500000 |  |
| `security` | `number` | `DBOFIELDTYPE_INTEGER` | `YIUu` | 19 | 0 | 500000 |  |
| `shared` | `number` | `DBOFIELDTYPE_INTEGER` | `EAQc` | 19 | 0 | 500000 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 19 | 0 | 500000 |  |

## crowdprops

Binary code: `LNfG`. Record type: `Fc27Record<'crowdprops', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessorytype` | `number` | `DBOFIELDTYPE_INTEGER` | `nelv` | 19 | 0 | 500000 |  |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `idprop` | `number` | `DBOFIELDTYPE_INTEGER` | `jZEh` | 19 | 0 | 500000 | Yes |
| `tint` | `number` | `DBOFIELDTYPE_INTEGER` | `fijm` | 19 | -1 | 500000 |  |

## crowdregion

Binary code: `Edjp`. Record type: `Fc27Record<'crowdregion', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `crowdregion` | `number` | `DBOFIELDTYPE_INTEGER` | `Edjp` | 4 | 0 | 9 |  |
| `skintone` | `number` | `DBOFIELDTYPE_INTEGER` | `feDA` | 7 | 0 | 100 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 10 | 0 | 1000 |  |

## crowdregionlrc

Binary code: `RJzi`. Record type: `Fc27Record<'crowdregionlrc', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `cold_drycloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `DNqu` | 32 | 0 | 0 |  |
| `cold_snowcloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `trvX` | 32 | 0 | 0 |  |
| `cold_wetcloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `bqNo` | 32 | 0 | 0 |  |
| `crowdregion` | `number` | `DBOFIELDTYPE_INTEGER` | `Edjp` | 4 | 0 | 10 |  |
| `rain_drycloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `Vweo` | 32 | 0 | 0 |  |
| `rain_snowcloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `asBJ` | 32 | 0 | 0 |  |
| `rain_wetcloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPFG` | 32 | 0 | 0 |  |
| `skintone_2` | `number \| null` | `DBOFIELDTYPE_REAL` | `gIgS` | 32 | 0 | 0 |  |
| `skintone_4` | `number \| null` | `DBOFIELDTYPE_REAL` | `xnhT` | 32 | 0 | 0 |  |
| `skintone_7` | `number \| null` | `DBOFIELDTYPE_REAL` | `ceIl` | 32 | 0 | 0 |  |
| `skintone_9` | `number \| null` | `DBOFIELDTYPE_REAL` | `betm` | 32 | 0 | 0 |  |
| `sunny_drycloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `lcSh` | 32 | 0 | 0 |  |
| `sunny_snowcloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `UEII` | 32 | 0 | 0 |  |
| `sunny_wetcloth` | `number \| null` | `DBOFIELDTYPE_REAL` | `dbpL` | 32 | 0 | 0 |  |

## crowdtints

Binary code: `grmf`. Record type: `Fc27Record<'crowdtints', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `age` | `number` | `DBOFIELDTYPE_INTEGER` | `SgJQ` | 19 | 0 | 500000 |  |
| `asset` | `string` | `DBOFIELDTYPE_STRING` | `ZjhH` | 800 | 0 | 0 |  |
| `chapter` | `number` | `DBOFIELDTYPE_INTEGER` | `NmSw` | 19 | 0 | 500000 |  |
| `districtid` | `number` | `DBOFIELDTYPE_INTEGER` | `ByCD` | 19 | -1 | 500000 |  |
| `event` | `number` | `DBOFIELDTYPE_INTEGER` | `kilk` | 19 | 0 | 500000 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 19 | 0 | 500000 | Yes |
| `skintone` | `number` | `DBOFIELDTYPE_INTEGER` | `feDA` | 19 | 0 | 500000 |  |
| `tint` | `number` | `DBOFIELDTYPE_INTEGER` | `fijm` | 19 | -1 | 500000 |  |

## customcoloredsmoke

Binary code: `KVdl`. Record type: `Fc27Record<'customcoloredsmoke', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `customsmokecolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `RcGm` | 9 | 0 | 256 |  |
| `customsmokecolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `tCeR` | 9 | 0 | 256 |  |
| `customsmokecolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `MXqq` | 9 | 0 | 256 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -2 | 200000 | Yes |

## customformations

Binary code: `pRBh`. Record type: `Fc27Record<'customformations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attackers` | `number \| null` | `DBOFIELDTYPE_REAL` | `Gtld` | 32 | 0 | 0 |  |
| `defenders` | `number \| null` | `DBOFIELDTYPE_REAL` | `XsCF` | 32 | 0 | 0 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `formationid` | `number` | `DBOFIELDTYPE_INTEGER` | `oHkj` | 11 | 0 | 2000 | Yes |
| `formationname` | `string` | `DBOFIELDTYPE_STRING` | `LGsF` | 200 | 0 | 0 |  |
| `midfielders` | `number \| null` | `DBOFIELDTYPE_REAL` | `yYmh` | 32 | 0 | 0 |  |
| `offensiverating` | `number` | `DBOFIELDTYPE_INTEGER` | `QraJ` | 3 | 0 | 4 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 1 | 0 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 5 | 1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 5 | 1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 5 | 1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 5 | 1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 5 | 1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 5 | 1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 5 | 1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 5 | 1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 5 | 1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 5 | 1 | 32 |  |
| `relativeformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `eDrl` | 10 | -1 | 1000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## customteamstyles

Binary code: `WpTz`. Record type: `Fc27Record<'customteamstyles', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `basestyle` | `number` | `DBOFIELDTYPE_INTEGER` | `MWmK` | 18 | -2 | 200000 |  |
| `busbuildupspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `uTrq` | 7 | 1 | 100 |  |
| `busdribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `IuyW` | 7 | 1 | 100 |  |
| `buspassing` | `number` | `DBOFIELDTYPE_INTEGER` | `LGcR` | 7 | 1 | 100 |  |
| `buspositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `Yfep` | 1 | 1 | 2 |  |
| `cccrossing` | `number` | `DBOFIELDTYPE_INTEGER` | `GQty` | 7 | 1 | 100 |  |
| `ccpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `Oops` | 7 | 1 | 100 |  |
| `ccpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `IuVq` | 1 | 1 | 2 |  |
| `ccshooting` | `number` | `DBOFIELDTYPE_INTEGER` | `luhr` | 7 | 1 | 100 |  |
| `defaggression` | `number` | `DBOFIELDTYPE_INTEGER` | `hKob` | 7 | 1 | 100 |  |
| `defdefenderline` | `number` | `DBOFIELDTYPE_INTEGER` | `OULw` | 1 | 1 | 2 |  |
| `defmentality` | `number` | `DBOFIELDTYPE_INTEGER` | `XVlA` | 7 | 1 | 100 |  |
| `defteamwidth` | `number` | `DBOFIELDTYPE_INTEGER` | `jVDV` | 7 | 1 | 100 |  |
| `teamstyleid` | `number` | `DBOFIELDTYPE_INTEGER` | `KjhG` | 7 | 900 | 1000 | Yes |

## dbversion

Binary code: `LJXi`. Record type: `Fc27Record<'dbversion', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 1 | 0 | 1 | Yes |
| `version` | `number \| null` | `DBOFIELDTYPE_REAL` | `DbIl` | 32 | 0 | 0 |  |

## dc_fat

Binary code: `zFhW`. Record type: `Fc27Record<'dc_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |

## dc_flesh

Binary code: `GPlh`. Record type: `Fc27Record<'dc_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |

## dc_skeletal

Binary code: `uxUO`. Record type: `Fc27Record<'dc_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 7 | 0 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 7 | 0 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |

## dc_skins

Binary code: `LXlu`. Record type: `Fc27Record<'dc_skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `freckles0` | `number` | `DBOFIELDTYPE_INTEGER` | `HvlV` | 5 | 0 | 24 |  |
| `freckles1` | `number` | `DBOFIELDTYPE_INTEGER` | `IspD` | 5 | 0 | 24 |  |
| `freckles2` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBsd` | 5 | 0 | 24 |  |
| `freckles3` | `number` | `DBOFIELDTYPE_INTEGER` | `CCIT` | 5 | 0 | 24 |  |
| `freckles4` | `number` | `DBOFIELDTYPE_INTEGER` | `MGBc` | 5 | 0 | 24 |  |
| `freckles5` | `number` | `DBOFIELDTYPE_INTEGER` | `DNFe` | 5 | 0 | 24 |  |
| `freckles6` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgA` | 5 | 0 | 24 |  |
| `freckles7` | `number` | `DBOFIELDTYPE_INTEGER` | `JzwK` | 5 | 0 | 24 |  |
| `frecklesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `eIgP` | 7 | 0 | 100 |  |
| `frecklesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `hDQh` | 7 | 0 | 100 |  |
| `frecklesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `AKpf` | 7 | 0 | 100 |  |
| `frecklesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `fRlp` | 7 | 0 | 100 |  |
| `frecklesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `lhoq` | 7 | 0 | 100 |  |
| `frecklesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `aiYo` | 7 | 0 | 100 |  |
| `frecklesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `vbVW` | 7 | 0 | 100 |  |
| `frecklesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `kYRM` | 7 | 0 | 100 |  |
| `moles0` | `number` | `DBOFIELDTYPE_INTEGER` | `ohSp` | 5 | 0 | 24 |  |
| `moles1` | `number` | `DBOFIELDTYPE_INTEGER` | `baCr` | 5 | 0 | 24 |  |
| `moles2` | `number` | `DBOFIELDTYPE_INTEGER` | `qjbN` | 5 | 0 | 24 |  |
| `moles3` | `number` | `DBOFIELDTYPE_INTEGER` | `loXX` | 5 | 0 | 24 |  |
| `moles4` | `number` | `DBOFIELDTYPE_INTEGER` | `rEig` | 5 | 0 | 24 |  |
| `moles5` | `number` | `DBOFIELDTYPE_INTEGER` | `YHSO` | 5 | 0 | 24 |  |
| `moles6` | `number` | `DBOFIELDTYPE_INTEGER` | `pyPo` | 5 | 0 | 24 |  |
| `moles7` | `number` | `DBOFIELDTYPE_INTEGER` | `mxLe` | 5 | 0 | 24 |  |
| `molesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `pqyU` | 7 | 0 | 100 |  |
| `molesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `axuK` | 7 | 0 | 100 |  |
| `molesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `XoTA` | 7 | 0 | 100 |  |
| `molesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `EjDi` | 7 | 0 | 100 |  |
| `molesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `ivGt` | 7 | 0 | 100 |  |
| `molesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `hsCD` | 7 | 0 | 100 |  |
| `molesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `cBzJ` | 7 | 0 | 100 |  |
| `molesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `zCjL` | 7 | 0 | 100 |  |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## dcplayernames

Binary code: `bneD`. Record type: `Fc27Record<'dcplayernames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 304 | 0 | 0 |  |
| `nameid` | `number` | `DBOFIELDTYPE_INTEGER` | `FuiB` | 13 | 46000 | 53500 | Yes |

## deactivatedstories

Binary code: `aDsH`. Record type: `Fc27Record<'deactivatedstories', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 13 | 0 | 8191 | Yes |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 13 | -1 | 4096 |  |
| `storytype` | `number` | `DBOFIELDTYPE_INTEGER` | `REui` | 7 | 0 | 64 |  |

## default_mentalities

Binary code: `ONtg`. Record type: `Fc27Record<'default_mentalities', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `mentalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `AwZu` | 13 | 0 | 8000 | Yes |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 2 | -1 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 6 | -1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 6 | -1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 6 | -1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 6 | -1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 6 | -1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 6 | -1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 6 | -1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 6 | -1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 6 | -1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 6 | -1 | 32 |  |
| `sourceformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `CeOS` | 11 | -1 | 2000 |  |
| `tactic_name` | `string` | `DBOFIELDTYPE_STRING` | `KAOA` | 640 | 0 | 0 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## default_teamsheets

Binary code: `AGmV`. Record type: `Fc27Record<'default_teamsheets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | -1 | 500000 |  |
| `customsub0in` | `number` | `DBOFIELDTYPE_INTEGER` | `bveC` | 19 | -1 | 500000 |  |
| `customsub0out` | `number` | `DBOFIELDTYPE_INTEGER` | `ohUP` | 19 | -1 | 500000 |  |
| `customsub1in` | `number` | `DBOFIELDTYPE_INTEGER` | `aNgZ` | 19 | -1 | 500000 |  |
| `customsub1out` | `number` | `DBOFIELDTYPE_INTEGER` | `sdHe` | 19 | -1 | 500000 |  |
| `customsub2in` | `number` | `DBOFIELDTYPE_INTEGER` | `cTCk` | 19 | -1 | 500000 |  |
| `customsub2out` | `number` | `DBOFIELDTYPE_INTEGER` | `aoQg` | 19 | -1 | 500000 |  |
| `freekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `LfBw` | 19 | -1 | 500000 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | -1 | 500000 |  |
| `leftfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WLKn` | 19 | -1 | 500000 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | -1 | 500000 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | -1 | 500000 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid11` | `number` | `DBOFIELDTYPE_INTEGER` | `ZaUj` | 19 | -1 | 500000 |  |
| `playerid12` | `number` | `DBOFIELDTYPE_INTEGER` | `UTxV` | 19 | -1 | 500000 |  |
| `playerid13` | `number` | `DBOFIELDTYPE_INTEGER` | `HYBP` | 19 | -1 | 500000 |  |
| `playerid14` | `number` | `DBOFIELDTYPE_INTEGER` | `xckU` | 19 | -1 | 500000 |  |
| `playerid15` | `number` | `DBOFIELDTYPE_INTEGER` | `SfAa` | 19 | -1 | 500000 |  |
| `playerid16` | `number` | `DBOFIELDTYPE_INTEGER` | `PmFc` | 19 | -1 | 500000 |  |
| `playerid17` | `number` | `DBOFIELDTYPE_INTEGER` | `MlJq` | 19 | -1 | 500000 |  |
| `playerid18` | `number` | `DBOFIELDTYPE_INTEGER` | `EyUf` | 19 | -1 | 500000 |  |
| `playerid19` | `number` | `DBOFIELDTYPE_INTEGER` | `bxkp` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid20` | `number` | `DBOFIELDTYPE_INTEGER` | `hozK` | 19 | -1 | 500000 |  |
| `playerid21` | `number` | `DBOFIELDTYPE_INTEGER` | `yrvw` | 19 | -1 | 500000 |  |
| `playerid22` | `number` | `DBOFIELDTYPE_INTEGER` | `fySi` | 19 | -1 | 500000 |  |
| `playerid23` | `number` | `DBOFIELDTYPE_INTEGER` | `gxCc` | 19 | -1 | 500000 |  |
| `playerid24` | `number` | `DBOFIELDTYPE_INTEGER` | `iVHj` | 19 | -1 | 500000 |  |
| `playerid25` | `number` | `DBOFIELDTYPE_INTEGER` | `xODp` | 19 | -1 | 500000 |  |
| `playerid26` | `number` | `DBOFIELDTYPE_INTEGER` | `cHyr` | 19 | -1 | 500000 |  |
| `playerid27` | `number` | `DBOFIELDTYPE_INTEGER` | `jMiF` | 19 | -1 | 500000 |  |
| `playerid28` | `number` | `DBOFIELDTYPE_INTEGER` | `bXPw` | 19 | -1 | 500000 |  |
| `playerid29` | `number` | `DBOFIELDTYPE_INTEGER` | `ocLy` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid30` | `number` | `DBOFIELDTYPE_INTEGER` | `ILuX` | 19 | -1 | 500000 |  |
| `playerid31` | `number` | `DBOFIELDTYPE_INTEGER` | `HQyJ` | 19 | -1 | 500000 |  |
| `playerid32` | `number` | `DBOFIELDTYPE_INTEGER` | `WJDv` | 19 | -1 | 500000 |  |
| `playerid33` | `number` | `DBOFIELDTYPE_INTEGER` | `FCTp` | 19 | -1 | 500000 |  |
| `playerid34` | `number` | `DBOFIELDTYPE_INTEGER` | `LaCu` | 19 | -1 | 500000 |  |
| `playerid35` | `number` | `DBOFIELDTYPE_INTEGER` | `EZGA` | 19 | -1 | 500000 |  |
| `playerid36` | `number` | `DBOFIELDTYPE_INTEGER` | `VgjC` | 19 | -1 | 500000 |  |
| `playerid37` | `number` | `DBOFIELDTYPE_INTEGER` | `GjzQ` | 19 | -1 | 500000 |  |
| `playerid38` | `number` | `DBOFIELDTYPE_INTEGER` | `SAKJ` | 19 | -1 | 500000 |  |
| `playerid39` | `number` | `DBOFIELDTYPE_INTEGER` | `NDOL` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid40` | `number` | `DBOFIELDTYPE_INTEGER` | `fyAg` | 19 | -1 | 500000 |  |
| `playerid41` | `number` | `DBOFIELDTYPE_INTEGER` | `AFka` | 19 | -1 | 500000 |  |
| `playerid42` | `number` | `DBOFIELDTYPE_INTEGER` | `BwJM` | 19 | -1 | 500000 |  |
| `playerid43` | `number` | `DBOFIELDTYPE_INTEGER` | `KrFy` | 19 | -1 | 500000 |  |
| `playerid44` | `number` | `DBOFIELDTYPE_INTEGER` | `cnUF` | 19 | -1 | 500000 |  |
| `playerid45` | `number` | `DBOFIELDTYPE_INTEGER` | `DkET` | 19 | -1 | 500000 |  |
| `playerid46` | `number` | `DBOFIELDTYPE_INTEGER` | `CtBV` | 19 | -1 | 500000 |  |
| `playerid47` | `number` | `DBOFIELDTYPE_INTEGER` | `Juxb` | 19 | -1 | 500000 |  |
| `playerid48` | `number` | `DBOFIELDTYPE_INTEGER` | `VNUO` | 19 | -1 | 500000 |  |
| `playerid49` | `number` | `DBOFIELDTYPE_INTEGER` | `uOEg` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid50` | `number` | `DBOFIELDTYPE_INTEGER` | `mdlt` | 19 | -1 | 500000 |  |
| `playerid51` | `number` | `DBOFIELDTYPE_INTEGER` | `deBn` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | -1 | 500000 |  |
| `rightfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `TxVD` | 19 | -1 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## defaultteamdata

Binary code: `GOVn`. Record type: `Fc27Record<'defaultteamdata', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 2 | -1 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 6 | -1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 6 | -1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 6 | -1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 6 | -1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 6 | -1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 6 | -1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 6 | -1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 6 | -1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 6 | -1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 6 | -1 | 32 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## dlcballs

Binary code: `jfBw`. Record type: `Fc27Record<'dlcballs', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 11 | 0 | 2000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 400 | 0 | 0 |  |

## dlcboots

Binary code: `rFEr`. Record type: `Fc27Record<'dlcboots', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 11 | 0 | 2000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 400 | 0 | 0 |  |

## dynamicimages

Binary code: `ubBA`. Record type: `Fc27Record<'dynamicimages', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `basecolour` | `string` | `DBOFIELDTYPE_STRING` | `LUfT` | 64 | 0 | 0 |  |
| `dynamicimageid` | `number` | `DBOFIELDTYPE_INTEGER` | `zlDt` | 13 | 0 | 8191 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 256 | 0 | 0 |  |

## editedplayernames

Binary code: `nQVU`. Record type: `Fc27Record<'editedplayernames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commonname` | `string` | `DBOFIELDTYPE_STRING` | `xnfZ` | 360 | 0 | 0 |  |
| `firstname` | `string` | `DBOFIELDTYPE_STRING` | `HdeP` | 360 | 0 | 0 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `playerjerseyname` | `string` | `DBOFIELDTYPE_STRING` | `kRfb` | 360 | 0 | 0 |  |
| `surname` | `string` | `DBOFIELDTYPE_STRING` | `rREd` | 360 | 0 | 0 |  |

## emotelink

Binary code: `wtgX`. Record type: `Fc27Record<'emotelink', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gameassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `mlkc` | 24 | 0 | 9000000 | Yes |
| `issynced` | `number` | `DBOFIELDTYPE_INTEGER` | `gQpD` | 1 | 0 | 1 |  |
| `playmode` | `number` | `DBOFIELDTYPE_INTEGER` | `lPDF` | 4 | 0 | 10 |  |
| `version` | `number` | `DBOFIELDTYPE_INTEGER` | `DbIl` | 4 | 0 | 10 |  |

## factory_teams

Binary code: `xIfB`. Record type: `Fc27Record<'factory_teams', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adboardid` | `number` | `DBOFIELDTYPE_INTEGER` | `covx` | 8 | 1 | 245 |  |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 32 | -2147483648 | 2147483647 |  |
| `attackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UAKP` | 7 | 0 | 99 |  |
| `balltype` | `number` | `DBOFIELDTYPE_INTEGER` | `NEfB` | 8 | 0 | 255 |  |
| `bodytypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `ZyrV` | 2 | 0 | 2 |  |
| `busbuildupspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `uTrq` | 7 | 1 | 100 |  |
| `buspassing` | `number` | `DBOFIELDTYPE_INTEGER` | `LGcR` | 7 | 1 | 100 |  |
| `buspositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `Yfep` | 1 | 1 | 2 |  |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | 1 | 500000 |  |
| `cccrossing` | `number` | `DBOFIELDTYPE_INTEGER` | `GQty` | 7 | 1 | 100 |  |
| `ccpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `Oops` | 7 | 1 | 100 |  |
| `ccpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `IuVq` | 1 | 1 | 2 |  |
| `ccshooting` | `number` | `DBOFIELDTYPE_INTEGER` | `luhr` | 7 | 1 | 100 |  |
| `defaggression` | `number` | `DBOFIELDTYPE_INTEGER` | `hKob` | 7 | 1 | 100 |  |
| `defdefenderline` | `number` | `DBOFIELDTYPE_INTEGER` | `OULw` | 1 | 1 | 2 |  |
| `defenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `btsS` | 7 | 0 | 99 |  |
| `defmentality` | `number` | `DBOFIELDTYPE_INTEGER` | `XVlA` | 7 | 1 | 100 |  |
| `defteamwidth` | `number` | `DBOFIELDTYPE_INTEGER` | `jVDV` | 7 | 1 | 100 |  |
| `domesticprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `ppLE` | 5 | 0 | 20 |  |
| `ethnicity` | `number` | `DBOFIELDTYPE_INTEGER` | `aArc` | 4 | 1 | 11 |  |
| `fancrowdhairskintexturecode` | `number` | `DBOFIELDTYPE_INTEGER` | `TXjg` | 3 | 0 | 5 |  |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 7 | 0 | 100 |  |
| `freekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `LfBw` | 19 | 1 | 500000 |  |
| `genericbanner` | `number` | `DBOFIELDTYPE_INTEGER` | `jfmo` | 1 | 0 | 1 |  |
| `genericint1` | `number` | `DBOFIELDTYPE_INTEGER` | `NSMy` | 7 | -1 | 100 |  |
| `genericint2` | `number` | `DBOFIELDTYPE_INTEGER` | `MLlE` | 7 | -1 | 100 |  |
| `internationalprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `edvw` | 5 | 0 | 20 |  |
| `jerseytype` | `number` | `DBOFIELDTYPE_INTEGER` | `zgDG` | 2 | 0 | 2 |  |
| `latitude` | `number` | `DBOFIELDTYPE_INTEGER` | `sjQg` | 8 | -90 | 90 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | 1 | 500000 |  |
| `longitude` | `number` | `DBOFIELDTYPE_INTEGER` | `NQXQ` | 9 | -180 | 180 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | 1 | 500000 |  |
| `matchdayattackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `jmRz` | 7 | 0 | 99 |  |
| `matchdaydefenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `zHfR` | 7 | 0 | 99 |  |
| `matchdaymidfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `HHDP` | 7 | 0 | 99 |  |
| `matchdayoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `sqCP` | 7 | 0 | 99 |  |
| `midfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `SqFN` | 7 | 0 | 99 |  |
| `numtransfersin` | `number` | `DBOFIELDTYPE_INTEGER` | `Gjri` | 5 | 0 | 31 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 0 | 99 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | 1 | 500000 |  |
| `personalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `IIKl` | 2 | 0 | 2 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | 1 | 500000 |  |
| `rivalteam` | `number` | `DBOFIELDTYPE_INTEGER` | `erSL` | 18 | 1 | 200000 |  |
| `stafftracksuitcolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `IJOq` | 3 | 0 | 4 |  |
| `suittypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `OuRh` | 2 | 0 | 2 |  |
| `suitvariationid` | `number` | `DBOFIELDTYPE_INTEGER` | `tfLa` | 1 | 0 | 1 |  |
| `teamcolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `EVjc` | 8 | 0 | 255 |  |
| `teamcolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `UrDD` | 8 | 0 | 255 |  |
| `teamcolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `lWTE` | 8 | 0 | 255 |  |
| `teamcolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `PcIL` | 8 | 0 | 255 |  |
| `teamcolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `rags` | 8 | 0 | 255 |  |
| `teamcolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `KzYP` | 8 | 0 | 255 |  |
| `teamcolor3b` | `number` | `DBOFIELDTYPE_INTEGER` | `Gzty` | 8 | 0 | 255 |  |
| `teamcolor3g` | `number` | `DBOFIELDTYPE_INTEGER` | `Olxh` | 8 | 0 | 255 |  |
| `teamcolor3r` | `number` | `DBOFIELDTYPE_INTEGER` | `Tsda` | 8 | 0 | 255 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | 1 | 200000 | Yes |
| `teamname` | `string` | `DBOFIELDTYPE_STRING` | `AUsv` | 480 | 0 | 0 |  |
| `transferbudget` | `number` | `DBOFIELDTYPE_INTEGER` | `SnDr` | 29 | 0 | 500000000 |  |
| `utcoffset` | `number` | `DBOFIELDTYPE_INTEGER` | `Csgu` | 5 | -12 | 13 |  |

## fieldpositionboundingboxes

Binary code: `MdTF`. Record type: `Fc27Record<'fieldpositionboundingboxes', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `pointx0` | `number \| null` | `DBOFIELDTYPE_REAL` | `NRfe` | 32 | 0 | 0 |  |
| `pointx1` | `number \| null` | `DBOFIELDTYPE_REAL` | `ySbQ` | 32 | 0 | 0 |  |
| `pointx2` | `number \| null` | `DBOFIELDTYPE_REAL` | `zbWm` | 32 | 0 | 0 |  |
| `pointx3` | `number \| null` | `DBOFIELDTYPE_REAL` | `gYGg` | 32 | 0 | 0 |  |
| `pointy0` | `number \| null` | `DBOFIELDTYPE_REAL` | `EGaT` | 32 | 0 | 0 |  |
| `pointy1` | `number \| null` | `DBOFIELDTYPE_REAL` | `XNeF` | 32 | 0 | 0 |  |
| `pointy2` | `number \| null` | `DBOFIELDTYPE_REAL` | `aEHb` | 32 | 0 | 0 |  |
| `pointy3` | `number \| null` | `DBOFIELDTYPE_REAL` | `pzXV` | 32 | 0 | 0 |  |
| `positionid` | `number` | `DBOFIELDTYPE_INTEGER` | `XyZq` | 6 | 0 | 32 | Yes |

## fifaGameSettings

Binary code: `IUAL`. Record type: `Fc27Record<'fifaGameSettings', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `closedbeta` | `number` | `DBOFIELDTYPE_INTEGER` | `Pnis` | 32 | -2147483648 | 2147483647 |  |
| `current` | `number` | `DBOFIELDTYPE_INTEGER` | `wkvh` | 32 | -2147483648 | 2147483647 |  |
| `demo` | `number` | `DBOFIELDTYPE_INTEGER` | `LRDi` | 32 | -2147483648 | 2147483647 |  |
| `normal` | `number` | `DBOFIELDTYPE_INTEGER` | `SJoL` | 32 | -2147483648 | 2147483647 |  |
| `press` | `number` | `DBOFIELDTYPE_INTEGER` | `ywvq` | 32 | -2147483648 | 2147483647 |  |
| `rangehigh` | `number` | `DBOFIELDTYPE_INTEGER` | `TjcB` | 32 | -2147483648 | 2147483647 |  |
| `rangelow` | `number` | `DBOFIELDTYPE_INTEGER` | `vMUf` | 32 | -2147483648 | 2147483647 |  |
| `settinghash` | `number` | `DBOFIELDTYPE_INTEGER` | `tYvq` | 32 | -2147483648 | 2147483647 | Yes |
| `settingname` | `string` | `DBOFIELDTYPE_STRING` | `GTjQ` | 320 | 0 | 0 |  |
| `streaminginstall` | `number` | `DBOFIELDTYPE_INTEGER` | `FDmU` | 32 | -2147483648 | 2147483647 |  |

## fixtures

Binary code: `Vmkr`. Record type: `Fc27Record<'fixtures', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `awayleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `TSDz` | 12 | -1 | 4000 |  |
| `awayteamform` | `number` | `DBOFIELDTYPE_INTEGER` | `xpDJ` | 15 | 0 | 22222 |  |
| `awayteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `entq` | 18 | -1 | 200000 |  |
| `awayteamleaguepos` | `number` | `DBOFIELDTYPE_INTEGER` | `uOWf` | 8 | 1 | 256 |  |
| `awayteammatchesplayed` | `number` | `DBOFIELDTYPE_INTEGER` | `ULNP` | 6 | 0 | 50 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 |  |
| `fixturedate` | `number` | `DBOFIELDTYPE_DATE` | `LpOR` | 20 | 0 | 1048575 |  |
| `fixtureid` | `number` | `DBOFIELDTYPE_INTEGER` | `pdNg` | 18 | 0 | 200000 | Yes |
| `fixturetime` | `number` | `DBOFIELDTYPE_INTEGER` | `avJq` | 17 | 0 | 86400 |  |
| `homeleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `qKND` | 12 | -1 | 4000 |  |
| `hometeamform` | `number` | `DBOFIELDTYPE_INTEGER` | `cVVx` | 15 | 0 | 22222 |  |
| `hometeamid` | `number` | `DBOFIELDTYPE_INTEGER` | `KbVA` | 18 | -1 | 200000 |  |
| `hometeamleaguepos` | `number` | `DBOFIELDTYPE_INTEGER` | `zeru` | 8 | 1 | 256 |  |
| `hometeammatchesplayed` | `number` | `DBOFIELDTYPE_INTEGER` | `BRbJ` | 6 | 0 | 50 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 11 | -1 | 2000 |  |

## footwear

Binary code: `IePu`. Record type: `Fc27Record<'footwear', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `clothingtype` | `number` | `DBOFIELDTYPE_INTEGER` | `yPLv` | 5 | 0 | 16 |  |
| `shoeid` | `number` | `DBOFIELDTYPE_INTEGER` | `hzFG` | 14 | 0 | 10000 | Yes |

## formationoffsets

Binary code: `mRIW`. Record type: `Fc27Record<'formationoffsets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `formationid` | `number` | `DBOFIELDTYPE_INTEGER` | `oHkj` | 10 | 0 | 1000 | Yes |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |

## formations

Binary code: `mDGw`. Record type: `Fc27Record<'formations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attackers` | `number \| null` | `DBOFIELDTYPE_REAL` | `Gtld` | 32 | 0 | 0 |  |
| `defenders` | `number \| null` | `DBOFIELDTYPE_REAL` | `XsCF` | 32 | 0 | 0 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `formationid` | `number` | `DBOFIELDTYPE_INTEGER` | `oHkj` | 11 | 0 | 2000 | Yes |
| `formationname` | `string` | `DBOFIELDTYPE_STRING` | `LGsF` | 200 | 0 | 0 |  |
| `midfielders` | `number \| null` | `DBOFIELDTYPE_REAL` | `yYmh` | 32 | 0 | 0 |  |
| `offensiverating` | `number` | `DBOFIELDTYPE_INTEGER` | `QraJ` | 3 | 0 | 4 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 1 | 0 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 5 | 1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 5 | 1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 5 | 1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 5 | 1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 5 | 1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 5 | 1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 5 | 1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 5 | 1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 5 | 1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 5 | 1 | 32 |  |
| `relativeformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `eDrl` | 10 | -1 | 1000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## ftue_presets

Binary code: `HlAR`. Record type: `Fc27Record<'ftue_presets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `field_abilities` | `string` | `DBOFIELDTYPE_STRING` | `kKBE` | 1560 | 0 | 0 |  |
| `field_acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `vImt` | 8 | 0 | 255 |  |
| `field_aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfbn` | 8 | 0 | 255 |  |
| `field_agility` | `number` | `DBOFIELDTYPE_INTEGER` | `NauE` | 8 | 0 | 255 |  |
| `field_balance` | `number` | `DBOFIELDTYPE_INTEGER` | `QcCh` | 8 | 0 | 255 |  |
| `field_ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `QkDa` | 8 | 0 | 255 |  |
| `field_bodytype` | `number` | `DBOFIELDTYPE_INTEGER` | `UnfG` | 8 | 0 | 255 |  |
| `field_composure` | `number` | `DBOFIELDTYPE_INTEGER` | `XmYe` | 8 | 0 | 255 |  |
| `field_crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `xFfe` | 8 | 0 | 255 |  |
| `field_curve` | `number` | `DBOFIELDTYPE_INTEGER` | `bwDw` | 8 | 0 | 255 |  |
| `field_dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `vTzr` | 8 | 0 | 255 |  |
| `field_finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `NGRo` | 8 | 0 | 255 |  |
| `field_fkaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `eRzc` | 8 | 0 | 255 |  |
| `field_foot` | `number` | `DBOFIELDTYPE_INTEGER` | `JVkW` | 8 | 0 | 255 |  |
| `field_gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `wMLn` | 8 | 0 | 255 |  |
| `field_gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `lNxm` | 8 | 0 | 255 |  |
| `field_gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `AFVR` | 8 | 0 | 255 |  |
| `field_gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `ZJTX` | 8 | 0 | 255 |  |
| `field_gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `VIOR` | 8 | 0 | 255 |  |
| `field_headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `sGGc` | 8 | 0 | 255 |  |
| `field_heightin` | `number` | `DBOFIELDTYPE_INTEGER` | `YApt` | 8 | 0 | 255 |  |
| `field_interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `TQNb` | 8 | 0 | 255 |  |
| `field_jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `wCcR` | 8 | 0 | 255 |  |
| `field_longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `UiIi` | 8 | 0 | 255 |  |
| `field_longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `eDxh` | 8 | 0 | 255 |  |
| `field_marking` | `number` | `DBOFIELDTYPE_INTEGER` | `IGqv` | 8 | 0 | 255 |  |
| `field_penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `kVwv` | 8 | 0 | 255 |  |
| `field_positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XYut` | 8 | 0 | 255 |  |
| `field_reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `MtHr` | 8 | 0 | 255 |  |
| `field_shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `Kddw` | 8 | 0 | 255 |  |
| `field_shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `wqxS` | 8 | 0 | 255 |  |
| `field_skillmoves` | `number` | `DBOFIELDTYPE_INTEGER` | `yMox` | 8 | 0 | 255 |  |
| `field_slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `oXIx` | 8 | 0 | 255 |  |
| `field_sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `Njzp` | 8 | 0 | 255 |  |
| `field_stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `fwZv` | 8 | 0 | 255 |  |
| `field_standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `SfLp` | 8 | 0 | 255 |  |
| `field_strength` | `number` | `DBOFIELDTYPE_INTEGER` | `Ctxy` | 8 | 0 | 255 |  |
| `field_vision` | `number` | `DBOFIELDTYPE_INTEGER` | `DYiu` | 8 | 0 | 255 |  |
| `field_volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `zNHm` | 8 | 0 | 255 |  |
| `field_weakfootability` | `number` | `DBOFIELDTYPE_INTEGER` | `TwiF` | 8 | 0 | 255 |  |
| `field_weightlbs` | `number` | `DBOFIELDTYPE_INTEGER` | `fcGh` | 8 | 0 | 255 |  |

## gameplay_site_config

Binary code: `qSZJ`. Record type: `Fc27Record<'gameplay_site_config', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `goal_net_pattern` | `number` | `DBOFIELDTYPE_INTEGER` | `kAdY` | 1 | 0 | 1 |  |
| `goal_net_style` | `number` | `DBOFIELDTYPE_INTEGER` | `okMy` | 6 | 0 | 50 |  |
| `goal_post_style` | `number` | `DBOFIELDTYPE_INTEGER` | `xSyN` | 3 | 0 | 7 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 8 | 0 | 255 | Yes |
| `max_pitch_length` | `number` | `DBOFIELDTYPE_INTEGER` | `ReVo` | 20 | 0 | 999999 |  |
| `max_pitch_width` | `number` | `DBOFIELDTYPE_INTEGER` | `ESBt` | 20 | 0 | 999999 |  |
| `min_pitch_length` | `number` | `DBOFIELDTYPE_INTEGER` | `ULqB` | 20 | 0 | 999999 |  |
| `min_pitch_width` | `number` | `DBOFIELDTYPE_INTEGER` | `nlKI` | 20 | 0 | 999999 |  |
| `surface_type` | `number` | `DBOFIELDTYPE_INTEGER` | `Gaov` | 3 | 0 | 7 |  |
| `visuals_prefab` | `number` | `DBOFIELDTYPE_INTEGER` | `hhyn` | 24 | 0 | 9999999 |  |

## genericmascot

Binary code: `Daxn`. Record type: `Fc27Record<'genericmascot', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `index` | `number` | `DBOFIELDTYPE_INTEGER` | `vfEq` | 1 | 0 | 1 |  |
| `jerseyname` | `string` | `DBOFIELDTYPE_STRING` | `hRqt` | 256 | 0 | 0 |  |
| `jerseynamevisible` | `number` | `DBOFIELDTYPE_INTEGER` | `Kdhs` | 1 | 0 | 1 |  |
| `jerseynumber` | `number` | `DBOFIELDTYPE_INTEGER` | `JFiY` | 7 | -1 | 99 |  |
| `kittype` | `number` | `DBOFIELDTYPE_INTEGER` | `eRor` | 5 | 0 | 22 |  |
| `kityear` | `number` | `DBOFIELDTYPE_INTEGER` | `pZEx` | 11 | 0 | 2027 |  |
| `mascotid` | `number` | `DBOFIELDTYPE_INTEGER` | `jXAJ` | 11 | 4000 | 6000 | Yes |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 12 | 0 | 3000 |  |

## goalcelebrationlink

Binary code: `xizF`. Record type: `Fc27Record<'goalcelebrationlink', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gameassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `mlkc` | 24 | 0 | 9000000 | Yes |
| `gameassetstrid` | `string` | `DBOFIELDTYPE_STRING` | `Pirg` | 600 | 0 | 0 |  |

## goalkeepergloves

Binary code: `ezDT`. Record type: `Fc27Record<'goalkeepergloves', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gloveid` | `number` | `DBOFIELDTYPE_INTEGER` | `BmGy` | 10 | 0 | 1023 | Yes |
| `isavailableinstore` | `number` | `DBOFIELDTYPE_INTEGER` | `MdKk` | 1 | 0 | 1 |  |
| `isembargoed` | `number` | `DBOFIELDTYPE_INTEGER` | `nokh` | 1 | 0 | 1 |  |
| `islicensed` | `number` | `DBOFIELDTYPE_INTEGER` | `oyWe` | 1 | 0 | 1 |  |

## gp_ucc

Binary code: `xgkO`. Record type: `Fc27Record<'gp_ucc', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `animationid` | `number` | `DBOFIELDTYPE_INTEGER` | `cveS` | 31 | 0 | 2147483647 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |
| `probability` | `number \| null` | `DBOFIELDTYPE_REAL` | `eQzB` | 32 | 0 | 0 |  |
| `ucctype` | `number` | `DBOFIELDTYPE_INTEGER` | `uvPU` | 8 | 0 | 255 |  |

## height_weight_impact

Binary code: `LkKs`. Record type: `Fc27Record<'height_weight_impact', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 8 | 0 | 255 |  |
| `keyid` | `number` | `DBOFIELDTYPE_INTEGER` | `uMjr` | 13 | 0 | 5000 | Yes |
| `value` | `number` | `DBOFIELDTYPE_INTEGER` | `SbfX` | 9 | -128 | 128 |  |

## height_weight_impact_range

Binary code: `MUQV`. Record type: `Fc27Record<'height_weight_impact_range', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 8 | 0 | 255 | Yes |
| `max` | `number` | `DBOFIELDTYPE_INTEGER` | `KODr` | 15 | -10000 | 10000 |  |
| `min` | `number` | `DBOFIELDTYPE_INTEGER` | `SbEu` | 15 | -10000 | 10000 |  |

## highres_fat

Binary code: `CouJ`. Record type: `Fc27Record<'highres_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 12 | 66000 | 69999 | Yes |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |

## highres_flesh

Binary code: `lhoa`. Record type: `Fc27Record<'highres_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 12 | 66000 | 69999 | Yes |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |

## highres_skeletal

Binary code: `iXwV`. Record type: `Fc27Record<'highres_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 12 | 66000 | 69999 | Yes |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 7 | 0 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 7 | 0 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |

## highres_skins

Binary code: `gtgp`. Record type: `Fc27Record<'highres_skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 12 | 66000 | 69999 | Yes |
| `freckles0` | `number` | `DBOFIELDTYPE_INTEGER` | `HvlV` | 5 | 0 | 24 |  |
| `freckles1` | `number` | `DBOFIELDTYPE_INTEGER` | `IspD` | 5 | 0 | 24 |  |
| `freckles2` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBsd` | 5 | 0 | 24 |  |
| `freckles3` | `number` | `DBOFIELDTYPE_INTEGER` | `CCIT` | 5 | 0 | 24 |  |
| `freckles4` | `number` | `DBOFIELDTYPE_INTEGER` | `MGBc` | 5 | 0 | 24 |  |
| `freckles5` | `number` | `DBOFIELDTYPE_INTEGER` | `DNFe` | 5 | 0 | 24 |  |
| `freckles6` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgA` | 5 | 0 | 24 |  |
| `freckles7` | `number` | `DBOFIELDTYPE_INTEGER` | `JzwK` | 5 | 0 | 24 |  |
| `frecklesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `eIgP` | 7 | 0 | 100 |  |
| `frecklesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `hDQh` | 7 | 0 | 100 |  |
| `frecklesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `AKpf` | 7 | 0 | 100 |  |
| `frecklesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `fRlp` | 7 | 0 | 100 |  |
| `frecklesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `lhoq` | 7 | 0 | 100 |  |
| `frecklesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `aiYo` | 7 | 0 | 100 |  |
| `frecklesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `vbVW` | 7 | 0 | 100 |  |
| `frecklesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `kYRM` | 7 | 0 | 100 |  |
| `moles0` | `number` | `DBOFIELDTYPE_INTEGER` | `ohSp` | 5 | 0 | 24 |  |
| `moles1` | `number` | `DBOFIELDTYPE_INTEGER` | `baCr` | 5 | 0 | 24 |  |
| `moles2` | `number` | `DBOFIELDTYPE_INTEGER` | `qjbN` | 5 | 0 | 24 |  |
| `moles3` | `number` | `DBOFIELDTYPE_INTEGER` | `loXX` | 5 | 0 | 24 |  |
| `moles4` | `number` | `DBOFIELDTYPE_INTEGER` | `rEig` | 5 | 0 | 24 |  |
| `moles5` | `number` | `DBOFIELDTYPE_INTEGER` | `YHSO` | 5 | 0 | 24 |  |
| `moles6` | `number` | `DBOFIELDTYPE_INTEGER` | `pyPo` | 5 | 0 | 24 |  |
| `moles7` | `number` | `DBOFIELDTYPE_INTEGER` | `mxLe` | 5 | 0 | 24 |  |
| `molesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `pqyU` | 7 | 0 | 100 |  |
| `molesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `axuK` | 7 | 0 | 100 |  |
| `molesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `XoTA` | 7 | 0 | 100 |  |
| `molesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `EjDi` | 7 | 0 | 100 |  |
| `molesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `ivGt` | 7 | 0 | 100 |  |
| `molesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `hsCD` | 7 | 0 | 100 |  |
| `molesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `cBzJ` | 7 | 0 | 100 |  |
| `molesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `zCjL` | 7 | 0 | 100 |  |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## highresasset

Binary code: `gzqh`. Record type: `Fc27Record<'highresasset', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 12 | 66000 | 69999 | Yes |
| `avatarheadvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `umhe` | 10 | 0 | 1000 |  |
| `crowdassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `ZkFv` | 10 | 0 | 1000 |  |
| `embeddedjersey` | `number` | `DBOFIELDTYPE_INTEGER` | `VvZM` | 1 | 0 | 1 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 14 | 1 | 16000 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 14 | 0 | 16000 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 14 | 0 | 16000 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 14 | 0 | 16000 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 16000 |  |
| `hasjersey` | `number` | `DBOFIELDTYPE_INTEGER` | `ihdj` | 1 | 0 | 1 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 14 | 0 | 16000 |  |
| `headskintone` | `number` | `DBOFIELDTYPE_INTEGER` | `Ygly` | 8 | 0 | 255 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 14 | 0 | 16000 |  |
| `ischild` | `number` | `DBOFIELDTYPE_INTEGER` | `uyRp` | 1 | 0 | 1 |  |
| `issuperfans` | `number` | `DBOFIELDTYPE_INTEGER` | `OtMG` | 1 | 0 | 1 |  |
| `isteen` | `number` | `DBOFIELDTYPE_INTEGER` | `ruEA` | 1 | 0 | 1 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `overweight` | `number` | `DBOFIELDTYPE_INTEGER` | `TfVg` | 1 | 0 | 1 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 24 | 0 | 9999999 |  |
| `weathertype` | `number` | `DBOFIELDTYPE_INTEGER` | `KkBa` | 2 | 0 | 3 |  |

## kickabout_tests_gameplay_sites

Binary code: `EoJv`. Record type: `Fc27Record<'kickabout_tests_gameplay_sites', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `activity_config_id` | `number` | `DBOFIELDTYPE_INTEGER` | `eVEP` | 8 | 0 | 255 |  |
| `gameplay_site_config_id` | `number` | `DBOFIELDTYPE_INTEGER` | `oycu` | 8 | 0 | 255 |  |
| `gameplay_site_id` | `number` | `DBOFIELDTYPE_INTEGER` | `Lzbd` | 8 | 0 | 255 | Yes |
| `gameplay_site_name` | `string` | `DBOFIELDTYPE_STRING` | `DsXc` | 1560 | 0 | 0 |  |

## kitcoloroverrides

Binary code: `CwpD`. Record type: `Fc27Record<'kitcoloroverrides', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `fontcolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `xkrK` | 9 | 0 | 256 |  |
| `fontcolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `VuLp` | 9 | 0 | 256 |  |
| `fontcolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `Qfbm` | 9 | 0 | 256 |  |
| `fontcolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `WNQx` | 9 | 0 | 256 |  |
| `fontcolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `Gboa` | 9 | 0 | 256 |  |
| `fontcolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `bmgB` | 9 | 0 | 256 |  |
| `teamcolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `EVjc` | 9 | 0 | 256 |  |
| `teamcolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `UrDD` | 9 | 0 | 256 |  |
| `teamcolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `lWTE` | 9 | 0 | 256 |  |
| `teamcolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `PcIL` | 9 | 0 | 256 |  |
| `teamcolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `rags` | 9 | 0 | 256 |  |
| `teamcolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `KzYP` | 9 | 0 | 256 |  |
| `teamcolor3b` | `number` | `DBOFIELDTYPE_INTEGER` | `Gzty` | 9 | 0 | 256 |  |
| `teamcolor3g` | `number` | `DBOFIELDTYPE_INTEGER` | `Olxh` | 9 | 0 | 256 |  |
| `teamcolor3r` | `number` | `DBOFIELDTYPE_INTEGER` | `Tsda` | 9 | 0 | 256 |  |
| `teamkitid` | `number` | `DBOFIELDTYPE_INTEGER` | `DPYU` | 24 | 0 | 10000000 | Yes |

## kitremapping

Binary code: `IDEX`. Record type: `Fc27Record<'kitremapping', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `customcrestassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `tvDz` | 31 | 0 | 2147483647 |  |
| `fromteamkittypetechid` | `number` | `DBOFIELDTYPE_INTEGER` | `agTo` | 5 | 0 | 22 |  |
| `fromteamtechid` | `number` | `DBOFIELDTYPE_INTEGER` | `VDZs` | 18 | 0 | 200000 | Yes |
| `fromyear` | `number` | `DBOFIELDTYPE_INTEGER` | `nEIQ` | 11 | 0 | 2027 |  |
| `iscustom` | `number` | `DBOFIELDTYPE_INTEGER` | `ODME` | 1 | 0 | 1 |  |
| `toteamkittypetechid` | `number` | `DBOFIELDTYPE_INTEGER` | `fpdJ` | 5 | 0 | 22 |  |
| `toteamtechid` | `number` | `DBOFIELDTYPE_INTEGER` | `kITO` | 18 | 0 | 200000 |  |
| `toyear` | `number` | `DBOFIELDTYPE_INTEGER` | `rFOw` | 11 | 0 | 2027 |  |

## kitrewardsmapping

Binary code: `Odrk`. Record type: `Fc27Record<'kitrewardsmapping', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamkitid` | `number` | `DBOFIELDTYPE_INTEGER` | `DPYU` | 16 | 0 | 50000 | Yes |

## leaguerefereelinks

Binary code: `tfLS`. Record type: `Fc27Record<'leaguerefereelinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 | Yes |
| `refereeid` | `number` | `DBOFIELDTYPE_INTEGER` | `Lfmt` | 19 | 1 | 500000 |  |

## leagues

Binary code: `onMQ`. Record type: `Fc27Record<'leagues', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `countryid` | `number` | `DBOFIELDTYPE_INTEGER` | `WDGJ` | 8 | 0 | 255 |  |
| `isbannerenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `uhiM` | 2 | 0 | 2 |  |
| `iscompetitioncrowdcardsenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `FtgW` | 2 | 0 | 2 |  |
| `iscompetitionpoleflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `eLCT` | 2 | 0 | 2 |  |
| `iscompetitionscarfenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `VtHL` | 2 | 0 | 2 |  |
| `isinternationalleague` | `number` | `DBOFIELDTYPE_INTEGER` | `JGZu` | 1 | 0 | 1 |  |
| `iswithintransferwindow` | `number` | `DBOFIELDTYPE_INTEGER` | `hXTp` | 1 | 0 | 1 |  |
| `iswomencompetition` | `number` | `DBOFIELDTYPE_INTEGER` | `SDHe` | 1 | 0 | 1 |  |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 | Yes |
| `leaguename` | `string` | `DBOFIELDTYPE_STRING` | `HEQX` | 960 | 0 | 0 |  |
| `leaguetimeslice` | `number` | `DBOFIELDTYPE_INTEGER` | `ilBe` | 6 | 0 | 35 |  |
| `leaguetype` | `number` | `DBOFIELDTYPE_INTEGER` | `JtdE` | 5 | 0 | 31 |  |
| `level` | `number` | `DBOFIELDTYPE_INTEGER` | `paPI` | 3 | 1 | 7 |  |

## leagueteamlinks

Binary code: `qdZF`. Record type: `Fc27Record<'leagueteamlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `actualvsexpectations` | `number` | `DBOFIELDTYPE_INTEGER` | `OcBo` | 3 | 0 | 4 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 12 | 0 | 4000 | Yes |
| `awaydraws` | `number` | `DBOFIELDTYPE_INTEGER` | `vmpt` | 5 | 0 | 25 |  |
| `awayga` | `number` | `DBOFIELDTYPE_INTEGER` | `uruv` | 8 | 0 | 200 |  |
| `awaygf` | `number` | `DBOFIELDTYPE_INTEGER` | `Unns` | 8 | 0 | 200 |  |
| `awaylosses` | `number` | `DBOFIELDTYPE_INTEGER` | `QMes` | 5 | 0 | 25 |  |
| `awaywins` | `number` | `DBOFIELDTYPE_INTEGER` | `txAm` | 5 | 0 | 25 |  |
| `champion` | `number` | `DBOFIELDTYPE_INTEGER` | `wEjP` | 1 | 0 | 1 |  |
| `currenttableposition` | `number` | `DBOFIELDTYPE_INTEGER` | `fNOl` | 8 | 1 | 256 |  |
| `grouping` | `number` | `DBOFIELDTYPE_INTEGER` | `pBOj` | 5 | 0 | 20 |  |
| `hasachievedobjective` | `number` | `DBOFIELDTYPE_INTEGER` | `JPKL` | 1 | 0 | 1 |  |
| `highestpossible` | `number` | `DBOFIELDTYPE_INTEGER` | `BgxX` | 5 | 0 | 20 |  |
| `highestprobable` | `number` | `DBOFIELDTYPE_INTEGER` | `HtAc` | 5 | 0 | 20 |  |
| `homedraws` | `number` | `DBOFIELDTYPE_INTEGER` | `HjBw` | 5 | 0 | 25 |  |
| `homega` | `number` | `DBOFIELDTYPE_INTEGER` | `WWGU` | 8 | 0 | 200 |  |
| `homegf` | `number` | `DBOFIELDTYPE_INTEGER` | `gazb` | 8 | 0 | 200 |  |
| `homelosses` | `number` | `DBOFIELDTYPE_INTEGER` | `oQGq` | 5 | 0 | 25 |  |
| `homewins` | `number` | `DBOFIELDTYPE_INTEGER` | `oxHc` | 5 | 0 | 25 |  |
| `lastgameresult` | `number` | `DBOFIELDTYPE_INTEGER` | `VfPr` | 2 | -1 | 2 |  |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 |  |
| `nummatchesplayed` | `number` | `DBOFIELDTYPE_INTEGER` | `QbIe` | 6 | 0 | 50 |  |
| `objective` | `number` | `DBOFIELDTYPE_INTEGER` | `BPRm` | 5 | 0 | 20 |  |
| `points` | `number` | `DBOFIELDTYPE_INTEGER` | `Yyym` | 12 | 0 | 4095 |  |
| `previousyeartableposition` | `number` | `DBOFIELDTYPE_INTEGER` | `MDeW` | 8 | 1 | 256 |  |
| `prevleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `PSlV` | 12 | -1 | 4000 |  |
| `teamform` | `number` | `DBOFIELDTYPE_INTEGER` | `wTTa` | 15 | 0 | 22222 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamlongform` | `number` | `DBOFIELDTYPE_INTEGER` | `Ogsy` | 7 | 0 | 100 |  |
| `teamshortform` | `number` | `DBOFIELDTYPE_INTEGER` | `hzrF` | 7 | 0 | 100 |  |
| `unbeatenallcomps` | `number` | `DBOFIELDTYPE_INTEGER` | `cMyO` | 1 | 0 | 1 |  |
| `unbeatenaway` | `number` | `DBOFIELDTYPE_INTEGER` | `vjer` | 1 | 0 | 1 |  |
| `unbeatenhome` | `number` | `DBOFIELDTYPE_INTEGER` | `MCMq` | 1 | 0 | 1 |  |
| `unbeatenleague` | `number` | `DBOFIELDTYPE_INTEGER` | `VDJP` | 1 | 0 | 1 |  |
| `yettowin` | `number` | `DBOFIELDTYPE_INTEGER` | `CLrO` | 1 | 0 | 1 |  |

## level_caps

Binary code: `xaoU`. Record type: `Fc27Record<'level_caps', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 13 | 0 | 5000 | Yes |
| `maxvalue` | `number` | `DBOFIELDTYPE_INTEGER` | `aeAI` | 8 | 0 | 255 |  |
| `typeid` | `number` | `DBOFIELDTYPE_INTEGER` | `Bwgx` | 8 | 0 | 255 |  |

## linecolor

Binary code: `sLLc`. Record type: `Fc27Record<'linecolor', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 24 | 0 | 9999999 |  |
| `attr1` | `string` | `DBOFIELDTYPE_STRING` | `mmiq` | 520 | 0 | 0 |  |
| `attr2` | `string` | `DBOFIELDTYPE_STRING` | `XvHU` | 520 | 0 | 0 |  |
| `attr3` | `string` | `DBOFIELDTYPE_STRING` | `ssra` | 520 | 0 | 0 |  |
| `attr4` | `string` | `DBOFIELDTYPE_STRING` | `iECV` | 520 | 0 | 0 |  |
| `attr5` | `string` | `DBOFIELDTYPE_STRING` | `tzyP` | 520 | 0 | 0 |  |
| `halstring` | `string` | `DBOFIELDTYPE_STRING` | `mEmD` | 2048 | 0 | 0 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |
| `primarycolor` | `string` | `DBOFIELDTYPE_STRING` | `uhyr` | 2048 | 0 | 0 |  |
| `secondarycolor` | `string` | `DBOFIELDTYPE_STRING` | `hGlL` | 2048 | 0 | 0 |  |

## lowresasset

Binary code: `DJmp`. Record type: `Fc27Record<'lowresasset', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `crowdassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `ZkFv` | 10 | 0 | 1000 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `hasjersey` | `number` | `DBOFIELDTYPE_INTEGER` | `ihdj` | 1 | 0 | 1 |  |
| `ischild` | `number` | `DBOFIELDTYPE_INTEGER` | `uyRp` | 1 | 0 | 1 |  |
| `isteen` | `number` | `DBOFIELDTYPE_INTEGER` | `ruEA` | 1 | 0 | 1 |  |
| `overweight` | `number` | `DBOFIELDTYPE_INTEGER` | `TfVg` | 1 | 0 | 1 |  |
| `weathertype` | `number` | `DBOFIELDTYPE_INTEGER` | `KkBa` | 2 | 0 | 3 |  |

## main_world_gameplay_sites

Binary code: `sSLL`. Record type: `Fc27Record<'main_world_gameplay_sites', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `activity_config_id` | `number` | `DBOFIELDTYPE_INTEGER` | `eVEP` | 8 | 0 | 255 |  |
| `gameplay_site_config_id` | `number` | `DBOFIELDTYPE_INTEGER` | `oycu` | 8 | 0 | 255 |  |
| `gameplay_site_id` | `number` | `DBOFIELDTYPE_INTEGER` | `Lzbd` | 8 | 0 | 255 | Yes |
| `gameplay_site_name` | `string` | `DBOFIELDTYPE_STRING` | `DsXc` | 1560 | 0 | 0 |  |

## manager

Binary code: `Knen`. Record type: `Fc27Record<'manager', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 8 | 0 | 255 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 8 | 0 | 255 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 8 | 0 | 255 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 8 | 0 | 255 |  |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `commonname` | `string` | `DBOFIELDTYPE_STRING` | `xnfZ` | 640 | 0 | 0 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `firstname` | `string` | `DBOFIELDTYPE_STRING` | `HdeP` | 640 | 0 | 0 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `islicensed` | `number` | `DBOFIELDTYPE_INTEGER` | `oyWe` | 1 | 0 | 1 |  |
| `isrewardable` | `number` | `DBOFIELDTYPE_INTEGER` | `kuMU` | 1 | 0 | 1 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `managerid` | `number` | `DBOFIELDTYPE_INTEGER` | `VHIB` | 19 | 1 | 500000 |  |
| `managerjointeamdate` | `number` | `DBOFIELDTYPE_DATE` | `FcMy` | 20 | 0 | 1048575 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `personalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `IIKl` | 2 | 0 | 2 |  |
| `seasonaloutfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `tFVQ` | 20 | 0 | 1000000 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `starrating` | `number \| null` | `DBOFIELDTYPE_REAL` | `zFJl` | 32 | 0 | 0 |  |
| `surname` | `string` | `DBOFIELDTYPE_STRING` | `rREd` | 640 | 0 | 0 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `trait1vequal` | `number` | `DBOFIELDTYPE_INTEGER` | `TPvg` | 23 | 0 | 8388607 |  |
| `trait1vstrong` | `number` | `DBOFIELDTYPE_INTEGER` | `aDMz` | 23 | 0 | 8388607 |  |
| `trait1vweak` | `number` | `DBOFIELDTYPE_INTEGER` | `kzMW` | 23 | 0 | 8388607 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 115 |  |

## mascot

Binary code: `YgjD`. Record type: `Fc27Record<'mascot', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `index` | `number` | `DBOFIELDTYPE_INTEGER` | `vfEq` | 1 | 0 | 1 |  |
| `jerseyname` | `string` | `DBOFIELDTYPE_STRING` | `hRqt` | 256 | 0 | 0 |  |
| `jerseynamevisible` | `number` | `DBOFIELDTYPE_INTEGER` | `Kdhs` | 1 | 0 | 1 |  |
| `jerseynumber` | `number` | `DBOFIELDTYPE_INTEGER` | `JFiY` | 7 | -1 | 99 |  |
| `kittype` | `number` | `DBOFIELDTYPE_INTEGER` | `eRor` | 5 | 0 | 22 |  |
| `kityear` | `number` | `DBOFIELDTYPE_INTEGER` | `pZEx` | 11 | 0 | 2027 |  |
| `mascotid` | `number` | `DBOFIELDTYPE_INTEGER` | `jXAJ` | 12 | 0 | 3999 | Yes |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 12 | 0 | 3000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamidwomens` | `number` | `DBOFIELDTYPE_INTEGER` | `iYMX` | 18 | -1 | 200000 |  |

## matchscenarios

Binary code: `MryP`. Record type: `Fc27Record<'matchscenarios', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `awayid` | `number` | `DBOFIELDTYPE_INTEGER` | `QOPu` | 18 | -1 | 200000 |  |
| `awayleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `TSDz` | 12 | -1 | 4000 |  |
| `awaysquadtype` | `number` | `DBOFIELDTYPE_INTEGER` | `RPYg` | 5 | 0 | 30 |  |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 9 | -1 | 300 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 17 | -1 | 109999 |  |
| `gametype` | `string` | `DBOFIELDTYPE_STRING` | `rUEZ` | 248 | 0 | 0 |  |
| `gametypesetting` | `number` | `DBOFIELDTYPE_INTEGER` | `ufqI` | 8 | 0 | 255 |  |
| `halflength` | `number` | `DBOFIELDTYPE_INTEGER` | `PQlY` | 5 | -1 | 30 |  |
| `hassettings` | `number` | `DBOFIELDTYPE_INTEGER` | `qqkZ` | 1 | 0 | 1 |  |
| `homeid` | `number` | `DBOFIELDTYPE_INTEGER` | `oLPV` | 18 | -1 | 200000 |  |
| `homeleagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `qKND` | 12 | -1 | 4000 |  |
| `homesquadtype` | `number` | `DBOFIELDTYPE_INTEGER` | `PGOj` | 5 | 0 | 30 |  |
| `scenarioid` | `number` | `DBOFIELDTYPE_INTEGER` | `JkPT` | 8 | 0 | 255 | Yes |
| `season` | `number` | `DBOFIELDTYPE_INTEGER` | `vojK` | 5 | 0 | 31 |  |
| `squadtype` | `number` | `DBOFIELDTYPE_INTEGER` | `DQkg` | 5 | -1 | 30 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 11 | -1 | 2000 |  |
| `timeofday` | `number` | `DBOFIELDTYPE_INTEGER` | `JJip` | 5 | 0 | 31 |  |
| `userside` | `number` | `DBOFIELDTYPE_INTEGER` | `MDGr` | 1 | 0 | 1 |  |
| `weather` | `number` | `DBOFIELDTYPE_INTEGER` | `EPIk` | 5 | 0 | 31 |  |

## mentalities

Binary code: `PkkJ`. Record type: `Fc27Record<'mentalities', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `activetactic` | `number` | `DBOFIELDTYPE_INTEGER` | `vUzn` | 1 | 0 | 1 |  |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `chancecreation` | `number` | `DBOFIELDTYPE_INTEGER` | `qjXG` | 2 | 0 | 3 |  |
| `code` | `string` | `DBOFIELDTYPE_STRING` | `SOcW` | 144 | 0 | 0 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `defensivestyle` | `number` | `DBOFIELDTYPE_INTEGER` | `SdiC` | 3 | 0 | 4 |  |
| `defensivewidth` | `number` | `DBOFIELDTYPE_INTEGER` | `pmLL` | 7 | 1 | 100 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `mentalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `AwZu` | 12 | 0 | 4000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 640 | 0 | 0 |  |
| `offensivestyle` | `number` | `DBOFIELDTYPE_INTEGER` | `QHJl` | 2 | 0 | 3 |  |
| `offensivewidth` | `number` | `DBOFIELDTYPE_INTEGER` | `TEos` | 7 | 1 | 100 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `playersinboxcorner` | `number` | `DBOFIELDTYPE_INTEGER` | `IbXP` | 3 | 0 | 4 |  |
| `playersinboxcross` | `number` | `DBOFIELDTYPE_INTEGER` | `BuNm` | 4 | 0 | 9 |  |
| `playersinboxfk` | `number` | `DBOFIELDTYPE_INTEGER` | `pOHj` | 3 | 0 | 4 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 2 | -1 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 6 | -1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 6 | -1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 6 | -1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 6 | -1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 6 | -1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 6 | -1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 6 | -1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 6 | -1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 6 | -1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 6 | -1 | 32 |  |
| `presetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ilsg` | 13 | 0 | 5000 |  |
| `profileid` | `number` | `DBOFIELDTYPE_INTEGER` | `qbEx` | 4 | -1 | 7 |  |
| `sourceformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `CeOS` | 19 | -1 | 300000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `jfDM` | 10 | -1 | 800 |  |

## mls_group_structure

Binary code: `hCEv`. Record type: `Fc27Record<'mls_group_structure', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `groupid` | `number` | `DBOFIELDTYPE_INTEGER` | `kSLo` | 1 | 1 | 2 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | 1 | 200000 | Yes |

## modeadboardlinks

Binary code: `YBgI`. Record type: `Fc27Record<'modeadboardlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adsponserid` | `number` | `DBOFIELDTYPE_INTEGER` | `Laxd` | 13 | 0 | 8191 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 13 | 0 | 8191 | Yes |
| `dynamicimageid` | `number` | `DBOFIELDTYPE_INTEGER` | `zlDt` | 13 | 0 | 8191 |  |
| `isapproved` | `number` | `DBOFIELDTYPE_INTEGER` | `McUr` | 1 | 0 | 1 |  |
| `modeid` | `number` | `DBOFIELDTYPE_INTEGER` | `NuNs` | 10 | -1 | 512 |  |

## multiclubownership

Binary code: `HAqY`. Record type: `Fc27Record<'multiclubownership', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `multiclubid` | `number` | `DBOFIELDTYPE_INTEGER` | `vukq` | 18 | 1 | 200000 |  |
| `seniority` | `number` | `DBOFIELDTYPE_INTEGER` | `EzRq` | 6 | 1 | 50 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `teamname` | `string` | `DBOFIELDTYPE_STRING` | `AUsv` | 480 | 0 | 0 |  |

## nationcoefficients

Binary code: `sCDs`. Record type: `Fc27Record<'nationcoefficients', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 12 | 0 | 3000 | Yes |
| `countryid` | `number` | `DBOFIELDTYPE_INTEGER` | `WDGJ` | 12 | 0 | 3000 |  |
| `points` | `number` | `DBOFIELDTYPE_INTEGER` | `Yyym` | 19 | 0 | 500000 |  |
| `year1` | `number` | `DBOFIELDTYPE_INTEGER` | `kqTY` | 17 | 0 | 100000 |  |
| `year2` | `number` | `DBOFIELDTYPE_INTEGER` | `Rjqm` | 17 | 0 | 100000 |  |
| `year3` | `number` | `DBOFIELDTYPE_INTEGER` | `ugaw` | 17 | 0 | 100000 |  |
| `year4` | `number` | `DBOFIELDTYPE_INTEGER` | `sQjz` | 17 | 0 | 100000 |  |
| `year5` | `number` | `DBOFIELDTYPE_INTEGER` | `nLfx` | 17 | 0 | 100000 |  |

## nations

Binary code: `Crbb`. Record type: `Fc27Record<'nations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `confederation` | `number` | `DBOFIELDTYPE_INTEGER` | `BJHH` | 3 | 1 | 7 |  |
| `groupid` | `number` | `DBOFIELDTYPE_INTEGER` | `kSLo` | 9 | 0 | 511 |  |
| `isocountrycode` | `string` | `DBOFIELDTYPE_STRING` | `UItq` | 16 | 0 | 0 |  |
| `nationid` | `number` | `DBOFIELDTYPE_INTEGER` | `LEtt` | 12 | 0 | 3000 | Yes |
| `nationname` | `string` | `DBOFIELDTYPE_STRING` | `zMVU` | 360 | 0 | 0 |  |
| `nationstartingfirstletter` | `number` | `DBOFIELDTYPE_INTEGER` | `lfjX` | 5 | 1 | 26 |  |
| `streetdressing` | `number` | `DBOFIELDTYPE_INTEGER` | `pHiN` | 3 | 0 | 6 |  |
| `top_tier` | `number` | `DBOFIELDTYPE_INTEGER` | `wrnV` | 1 | 0 | 1 |  |

## netpattern

Binary code: `ONDL`. Record type: `Fc27Record<'netpattern', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |
| `netpatternid` | `number` | `DBOFIELDTYPE_INTEGER` | `MxYU` | 10 | 0 | 1000 |  |
| `type` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpXz` | 10 | 0 | 1000 |  |

## outfitarrangements

Binary code: `Zeam`. Record type: `Fc27Record<'outfitarrangements', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `accessorytypefour` | `number` | `DBOFIELDTYPE_INTEGER` | `YVHI` | 19 | 0 | 500000 |  |
| `accessorytypefourvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `Odje` | 19 | 0 | 500000 |  |
| `accessorytypeone` | `number` | `DBOFIELDTYPE_INTEGER` | `gZEI` | 19 | 0 | 500000 |  |
| `accessorytypeonevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `DCdQ` | 19 | 0 | 500000 |  |
| `accessorytypethree` | `number` | `DBOFIELDTYPE_INTEGER` | `dtyB` | 19 | 0 | 500000 |  |
| `accessorytypethreevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `MFLr` | 19 | 0 | 500000 |  |
| `accessorytypetwo` | `number` | `DBOFIELDTYPE_INTEGER` | `fLIz` | 19 | 0 | 500000 |  |
| `accessorytypetwovariation` | `number` | `DBOFIELDTYPE_INTEGER` | `gVGx` | 19 | 0 | 500000 |  |
| `bottomid` | `number` | `DBOFIELDTYPE_INTEGER` | `auOh` | 19 | -1 | 500000 |  |
| `bottomsecondlayerid` | `number` | `DBOFIELDTYPE_INTEGER` | `QnEw` | 20 | -1 | 600000 |  |
| `bottomsecondlayertexturevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `eIDC` | 19 | -1 | 500000 |  |
| `bottomtexturevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `prnZ` | 19 | -1 | 500000 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkgloves` | `number` | `DBOFIELDTYPE_INTEGER` | `kGOK` | 19 | 0 | 300000 |  |
| `gkglovetype` | `number` | `DBOFIELDTYPE_INTEGER` | `kSvT` | 19 | 0 | 300000 |  |
| `jerseykitid` | `number` | `DBOFIELDTYPE_INTEGER` | `exYT` | 19 | 0 | 300000 |  |
| `leglength` | `number` | `DBOFIELDTYPE_INTEGER` | `WWNQ` | 19 | -1 | 300000 |  |
| `outfitarmlength` | `number` | `DBOFIELDTYPE_INTEGER` | `LjOg` | 19 | -1 | 300000 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 | Yes |
| `shoedesign` | `number` | `DBOFIELDTYPE_INTEGER` | `PQQo` | 14 | -1 | 10000 |  |
| `shoeid` | `number` | `DBOFIELDTYPE_INTEGER` | `hzFG` | 14 | -1 | 10000 |  |
| `shortskitid` | `number` | `DBOFIELDTYPE_INTEGER` | `fzQl` | 19 | 0 | 300000 |  |
| `sockid` | `number` | `DBOFIELDTYPE_INTEGER` | `LnDM` | 14 | -1 | 10000 |  |
| `sockskitid` | `number` | `DBOFIELDTYPE_INTEGER` | `UKwp` | 19 | 0 | 300000 |  |
| `socktexturevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `StTC` | 14 | -1 | 10000 |  |
| `topbaseid` | `number` | `DBOFIELDTYPE_INTEGER` | `Kcfu` | 19 | -1 | 500000 |  |
| `topbasetexturevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `BvDs` | 19 | -1 | 500000 |  |
| `topsecondlayerid` | `number` | `DBOFIELDTYPE_INTEGER` | `NKtA` | 19 | -1 | 500000 |  |
| `topsecondlayertexturevariation` | `number` | `DBOFIELDTYPE_INTEGER` | `TIDs` | 19 | -1 | 500000 |  |
| `usekitaccessory` | `number` | `DBOFIELDTYPE_INTEGER` | `zlpG` | 1 | 0 | 1 |  |
| `usekitbottom` | `number` | `DBOFIELDTYPE_INTEGER` | `uTRu` | 1 | 0 | 1 |  |
| `usekitgkgloves` | `number` | `DBOFIELDTYPE_INTEGER` | `fiKW` | 1 | 0 | 1 |  |
| `usekitsock` | `number` | `DBOFIELDTYPE_INTEGER` | `Albn` | 1 | 0 | 1 |  |
| `usekitwarmupbib` | `number` | `DBOFIELDTYPE_INTEGER` | `Fmvs` | 1 | 0 | 1 |  |
| `usekitwarmupjacket` | `number` | `DBOFIELDTYPE_INTEGER` | `JPrZ` | 1 | 0 | 1 |  |
| `usekitwarmuppants` | `number` | `DBOFIELDTYPE_INTEGER` | `FyBC` | 1 | 0 | 1 |  |
| `useplayerarms` | `number` | `DBOFIELDTYPE_INTEGER` | `WKEJ` | 1 | 0 | 1 |  |
| `useplayerlegs` | `number` | `DBOFIELDTYPE_INTEGER` | `nyhP` | 1 | 0 | 1 |  |
| `useplayershadow` | `number` | `DBOFIELDTYPE_INTEGER` | `ynmZ` | 1 | 0 | 1 |  |
| `useshoe` | `number` | `DBOFIELDTYPE_INTEGER` | `HAHP` | 1 | 0 | 1 |  |
| `usewardrobeaccessory` | `number` | `DBOFIELDTYPE_INTEGER` | `xoCC` | 1 | 0 | 1 |  |
| `usewardrobesock` | `number` | `DBOFIELDTYPE_INTEGER` | `SJCN` | 1 | 0 | 1 |  |

## outfithairlinks

Binary code: `QqjW`. Record type: `Fc27Record<'outfithairlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 | Yes |

## perks

Binary code: `AolY`. Record type: `Fc27Record<'perks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `perkid` | `number` | `DBOFIELDTYPE_INTEGER` | `bOld` | 8 | 0 | 255 | Yes |
| `perktier` | `number` | `DBOFIELDTYPE_INTEGER` | `ElWc` | 8 | 0 | 255 |  |
| `typeid` | `number` | `DBOFIELDTYPE_INTEGER` | `Bwgx` | 8 | 0 | 255 |  |

## persistent_events

Binary code: `gCOv`. Record type: `Fc27Record<'persistent_events', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `compobjid` | `number` | `DBOFIELDTYPE_INTEGER` | `OvfW` | 11 | -1 | 2000 |  |
| `eventdate` | `number` | `DBOFIELDTYPE_INTEGER` | `GHrs` | 31 | -1 | 2147483520 |  |
| `eventid` | `number` | `DBOFIELDTYPE_INTEGER` | `CBIo` | 6 | 0 | 50 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 31 | 0 | 2147483520 | Yes |
| `miscvalue` | `number` | `DBOFIELDTYPE_INTEGER` | `sVlx` | 32 | -2147483648 | 2147483647 |  |
| `player1id` | `number` | `DBOFIELDTYPE_INTEGER` | `rWzy` | 19 | -1 | 500000 |  |
| `team1id` | `number` | `DBOFIELDTYPE_INTEGER` | `TmFq` | 18 | -1 | 200000 |  |
| `team2id` | `number` | `DBOFIELDTYPE_INTEGER` | `VwfD` | 18 | -1 | 200000 |  |

## player_grudgelove

Binary code: `DFeB`. Record type: `Fc27Record<'player_grudgelove', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `emotional_teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `EhVu` | 18 | -1 | 200000 |  |
| `level_of_emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `jqVD` | 3 | 0 | 7 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |

## playerarchetypelinks

Binary code: `dRCR`. Record type: `Fc27Record<'playerarchetypelinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ampassetid1` | `number` | `DBOFIELDTYPE_INTEGER` | `MEtf` | 19 | 0 | 500000 |  |
| `ampassetid2` | `number` | `DBOFIELDTYPE_INTEGER` | `JNoB` | 19 | 0 | 500000 |  |
| `ampassetid3` | `number` | `DBOFIELDTYPE_INTEGER` | `SOkv` | 19 | 0 | 500000 |  |
| `ampcampaignid1` | `number` | `DBOFIELDTYPE_INTEGER` | `CWRg` | 15 | 0 | 32767 |  |
| `ampcampaignid2` | `number` | `DBOFIELDTYPE_INTEGER` | `DPsy` | 15 | 0 | 32767 |  |
| `ampcampaignid3` | `number` | `DBOFIELDTYPE_INTEGER` | `cUww` | 15 | 0 | 32767 |  |
| `ampdefid1` | `number` | `DBOFIELDTYPE_INTEGER` | `VFrb` | 23 | 0 | 5000000 |  |
| `ampdefid2` | `number` | `DBOFIELDTYPE_INTEGER` | `QwSd` | 23 | 0 | 5000000 |  |
| `ampdefid3` | `number` | `DBOFIELDTYPE_INTEGER` | `LrWT` | 23 | 0 | 5000000 |  |
| `amptierid1` | `number` | `DBOFIELDTYPE_INTEGER` | `CBri` | 7 | 0 | 127 |  |
| `amptierid2` | `number` | `DBOFIELDTYPE_INTEGER` | `DIuE` | 7 | 0 | 127 |  |
| `amptierid3` | `number` | `DBOFIELDTYPE_INTEGER` | `cDyG` | 7 | 0 | 127 |  |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `archetypelevel` | `number` | `DBOFIELDTYPE_INTEGER` | `GMAw` | 8 | 0 | 255 |  |
| `background` | `number` | `DBOFIELDTYPE_INTEGER` | `GvLz` | 8 | 0 | 255 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |
| `sigplaystyle1` | `number` | `DBOFIELDTYPE_INTEGER` | `NBwQ` | 8 | -1 | 127 |  |
| `sigplaystyle2` | `number` | `DBOFIELDTYPE_INTEGER` | `MIVO` | 8 | -1 | 127 |  |
| `sigplaystyle3` | `number` | `DBOFIELDTYPE_INTEGER` | `zLFI` | 8 | -1 | 127 |  |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |

## playerbodyrestrictions

Binary code: `ijbM`. Record type: `Fc27Record<'playerbodyrestrictions', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playerbodyrestrictioncode` | `number` | `DBOFIELDTYPE_INTEGER` | `vgHd` | 3 | 0 | 7 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |

## playerbootremapping

Binary code: `yYtg`. Record type: `Fc27Record<'playerbootremapping', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 | Yes |
| `shoetyperemapcode` | `number` | `DBOFIELDTYPE_INTEGER` | `JRYK` | 12 | 0 | 4095 |  |

## playerboots

Binary code: `cQNG`. Record type: `Fc27Record<'playerboots', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `isadidas` | `number` | `DBOFIELDTYPE_INTEGER` | `Rxnn` | 1 | 0 | 1 |  |
| `isavailableinstore` | `number` | `DBOFIELDTYPE_INTEGER` | `MdKk` | 1 | 0 | 1 |  |
| `isembargoed` | `number` | `DBOFIELDTYPE_INTEGER` | `nokh` | 1 | 0 | 1 |  |
| `ishighboot` | `number` | `DBOFIELDTYPE_INTEGER` | `PrnB` | 1 | 0 | 1 |  |
| `islegacy` | `number` | `DBOFIELDTYPE_INTEGER` | `kErN` | 1 | 0 | 1 |  |
| `islicensed` | `number` | `DBOFIELDTYPE_INTEGER` | `oyWe` | 1 | 0 | 1 |  |
| `islocked` | `number` | `DBOFIELDTYPE_INTEGER` | `NhCK` | 1 | 0 | 1 |  |
| `isrewardable` | `number` | `DBOFIELDTYPE_INTEGER` | `kuMU` | 1 | 0 | 1 |  |
| `issmallsided` | `number` | `DBOFIELDTYPE_INTEGER` | `jDnB` | 1 | 0 | 1 |  |
| `manufacturerid` | `number` | `DBOFIELDTYPE_INTEGER` | `rASU` | 8 | 1 | 256 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |
| `shoecolor1` | `number` | `DBOFIELDTYPE_INTEGER` | `UvRX` | 5 | 0 | 31 |  |
| `shoecolor2` | `number` | `DBOFIELDTYPE_INTEGER` | `FCMp` | 5 | 0 | 31 |  |
| `shoedesign` | `number` | `DBOFIELDTYPE_INTEGER` | `PQQo` | 2 | 0 | 3 |  |
| `shoetype` | `number` | `DBOFIELDTYPE_INTEGER` | `LRPg` | 12 | 0 | 4095 | Yes |

## playercalls

Binary code: `NyRh`. Record type: `Fc27Record<'playercalls', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `femalevoices` | `number` | `DBOFIELDTYPE_INTEGER` | `LbkR` | 4 | 0 | 15 |  |
| `malevoices` | `number` | `DBOFIELDTYPE_INTEGER` | `Hmrs` | 4 | 0 | 15 |  |
| `playercallpatchbankindex` | `number` | `DBOFIELDTYPE_INTEGER` | `FvSS` | 5 | 0 | 31 | Yes |

## playerformdiff

Binary code: `UlaA`. Record type: `Fc27Record<'playerformdiff', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `newoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `xKVG` | 7 | 1 | 99 |  |
| `oldoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `HjSL` | 7 | 1 | 99 |  |
| `overallratingdiff` | `number` | `DBOFIELDTYPE_INTEGER` | `BssH` | 8 | -99 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## playerloans

Binary code: `ZrAO`. Record type: `Fc27Record<'playerloans', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `futureoptiontobuy` | `number` | `DBOFIELDTYPE_INTEGER` | `ujHR` | 30 | 0 | 1000000000 |  |
| `isloantobuy` | `number` | `DBOFIELDTYPE_INTEGER` | `uQxT` | 1 | 0 | 1 |  |
| `loandateend` | `number` | `DBOFIELDTYPE_DATE` | `gEHq` | 20 | 0 | 1048575 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `teamidloanedfrom` | `number` | `DBOFIELDTYPE_INTEGER` | `GlCc` | 18 | -1 | 200000 |  |

## playernamemap

Binary code: `VGQZ`. Record type: `Fc27Record<'playernamemap', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 20 | -1 | 1000000 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |

## playernames

Binary code: `BGwe`. Record type: `Fc27Record<'playernames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 16 | 900000 | 965000 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 608 | 0 | 0 |  |
| `nameid` | `number` | `DBOFIELDTYPE_INTEGER` | `FuiB` | 16 | 0 | 45999 | Yes |

## playeroutfitlinks

Binary code: `bzkt`. Record type: `Fc27Record<'playeroutfitlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 | Yes |

## playerperks

Binary code: `YNjB`. Record type: `Fc27Record<'playerperks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `perk_0` | `number` | `DBOFIELDTYPE_INTEGER` | `fMRf` | 9 | -1 | 255 |  |
| `perk_0_tier` | `number` | `DBOFIELDTYPE_INTEGER` | `pfKo` | 9 | -1 | 255 |  |
| `perk_1` | `number` | `DBOFIELDTYPE_INTEGER` | `gPBt` | 9 | -1 | 255 |  |
| `perk_1_tier` | `number` | `DBOFIELDTYPE_INTEGER` | `GXtd` | 9 | -1 | 255 |  |
| `perk_2` | `number` | `DBOFIELDTYPE_INTEGER` | `BWwv` | 9 | -1 | 255 |  |
| `perk_2_tier` | `number` | `DBOFIELDTYPE_INTEGER` | `gHTv` | 9 | -1 | 255 |  |
| `playerperks_artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `OMYv` | 19 | 0 | 500000 | Yes |
| `playerperks_playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `bBKF` | 19 | 0 | 500000 |  |

## playerpositionzones

Binary code: `AohT`. Record type: `Fc27Record<'playerpositionzones', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `pointx0` | `number \| null` | `DBOFIELDTYPE_REAL` | `NRfe` | 32 | 0 | 0 |  |
| `pointx1` | `number \| null` | `DBOFIELDTYPE_REAL` | `ySbQ` | 32 | 0 | 0 |  |
| `pointx2` | `number \| null` | `DBOFIELDTYPE_REAL` | `zbWm` | 32 | 0 | 0 |  |
| `pointx3` | `number \| null` | `DBOFIELDTYPE_REAL` | `gYGg` | 32 | 0 | 0 |  |
| `pointy0` | `number \| null` | `DBOFIELDTYPE_REAL` | `EGaT` | 32 | 0 | 0 |  |
| `pointy1` | `number \| null` | `DBOFIELDTYPE_REAL` | `XNeF` | 32 | 0 | 0 |  |
| `pointy2` | `number \| null` | `DBOFIELDTYPE_REAL` | `aEHb` | 32 | 0 | 0 |  |
| `pointy3` | `number \| null` | `DBOFIELDTYPE_REAL` | `pzXV` | 32 | 0 | 0 |  |
| `positionid` | `number` | `DBOFIELDTYPE_INTEGER` | `XyZq` | 6 | 0 | 32 | Yes |

## playerpronouns

Binary code: `nhXl`. Record type: `Fc27Record<'playerpronouns', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `pronoun` | `string` | `DBOFIELDTYPE_STRING` | `ETtk` | 160 | 0 | 0 |  |
| `pronounid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ekgs` | 8 | 0 | 255 |  |

## players

Binary code: `CZUM`. Record type: `Fc27Record<'players', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 8 | 0 | 255 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 8 | 0 | 255 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 8 | 0 | 255 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 8 | 0 | 255 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `animfreekickstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `jLuE` | 5 | 0 | 31 |  |
| `animpenaltiesstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `naby` | 5 | 0 | 31 |  |
| `avatarpomid` | `number` | `DBOFIELDTYPE_INTEGER` | `VRvd` | 9 | 0 | 511 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `commonnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `HDYx` | 16 | 0 | 53500 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `contractvaliduntil` | `number` | `DBOFIELDTYPE_INTEGER` | `qvmK` | 7 | 2000 | 2120 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `defspe` | `number` | `DBOFIELDTYPE_INTEGER` | `aEqa` | 7 | 0 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `driref` | `number` | `DBOFIELDTYPE_INTEGER` | `zNYP` | 7 | 0 | 99 |  |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 1 | 5 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `finishingcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `GFLI` | 17 | 0 | 100000 |  |
| `finishingcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `LwOe` | 17 | 0 | 100000 |  |
| `firstnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `tHlO` | 16 | 0 | 53500 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkglovetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `GReX` | 10 | 0 | 1023 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkkickstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `rJqp` | 2 | 0 | 3 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `gksavetype` | `number` | `DBOFIELDTYPE_INTEGER` | `SJED` | 1 | 0 | 1 |  |
| `growthprofile` | `number` | `DBOFIELDTYPE_INTEGER` | `OwTX` | 4 | 0 | 8 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `hasseasonaljersey` | `number` | `DBOFIELDTYPE_INTEGER` | `iCDR` | 3 | 0 | 7 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 220 |  |
| `icontrait1` | `number` | `DBOFIELDTYPE_INTEGER` | `OjQY` | 30 | 0 | 1073741823 |  |
| `icontrait2` | `number` | `DBOFIELDTYPE_INTEGER` | `PqtG` | 17 | 0 | 131071 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `internationalrep` | `number` | `DBOFIELDTYPE_INTEGER` | `WVsa` | 3 | 1 | 5 |  |
| `iscustomized` | `number` | `DBOFIELDTYPE_INTEGER` | `Oirg` | 1 | 0 | 1 |  |
| `isretiring` | `number` | `DBOFIELDTYPE_INTEGER` | `kvuF` | 1 | 0 | 1 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 2 | 0 | 2 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `jerseystylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `miIB` | 1 | 0 | 1 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `lastnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `QCfa` | 16 | 0 | 53500 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `modifier` | `number` | `DBOFIELDTYPE_INTEGER` | `isYi` | 4 | -5 | 5 |  |
| `muscularitycode` | `number` | `DBOFIELDTYPE_INTEGER` | `MUYu` | 1 | 0 | 1 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 1 | 99 |  |
| `pacdiv` | `number` | `DBOFIELDTYPE_INTEGER` | `aapy` | 7 | 0 | 99 |  |
| `paskic` | `number` | `DBOFIELDTYPE_INTEGER` | `ceRf` | 7 | 0 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `personality` | `number` | `DBOFIELDTYPE_INTEGER` | `hxxo` | 3 | 1 | 5 |  |
| `phypos` | `number` | `DBOFIELDTYPE_INTEGER` | `hdMV` | 7 | 0 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `playerjerseynameid` | `number` | `DBOFIELDTYPE_INTEGER` | `Vqpv` | 16 | 0 | 53500 |  |
| `playerjointeamdate` | `number` | `DBOFIELDTYPE_DATE` | `vTpl` | 20 | 0 | 1048575 |  |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `preferredfoot` | `number` | `DBOFIELDTYPE_INTEGER` | `MDvm` | 1 | 1 | 2 |  |
| `preferredposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `wZQU` | 5 | 0 | 31 |  |
| `preferredposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `NgVS` | 6 | -1 | 32 |  |
| `preferredposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `OblE` | 6 | -1 | 32 |  |
| `preferredposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `YnYz` | 6 | -1 | 32 |  |
| `preferredposition5` | `number` | `DBOFIELDTYPE_INTEGER` | `rkcN` | 6 | -1 | 32 |  |
| `preferredposition6` | `number` | `DBOFIELDTYPE_INTEGER` | `GdFb` | 6 | -1 | 32 |  |
| `preferredposition7` | `number` | `DBOFIELDTYPE_INTEGER` | `VeVh` | 6 | -1 | 32 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `releaseclause` | `number` | `DBOFIELDTYPE_INTEGER` | `pSzm` | 30 | 0 | 1000000000 |  |
| `role1` | `number` | `DBOFIELDTYPE_INTEGER` | `FYhg` | 8 | 0 | 199 |  |
| `role2` | `number` | `DBOFIELDTYPE_INTEGER` | `ERce` | 8 | 0 | 199 |  |
| `role3` | `number` | `DBOFIELDTYPE_INTEGER` | `HSMQ` | 8 | 0 | 199 |  |
| `role4` | `number` | `DBOFIELDTYPE_INTEGER` | `hGZL` | 8 | 0 | 199 |  |
| `role5` | `number` | `DBOFIELDTYPE_INTEGER` | `yNVZ` | 8 | 0 | 199 |  |
| `role6` | `number` | `DBOFIELDTYPE_INTEGER` | `zUsn` | 8 | 0 | 199 |  |
| `role7` | `number` | `DBOFIELDTYPE_INTEGER` | `MPct` | 8 | 0 | 199 |  |
| `role8` | `number` | `DBOFIELDTYPE_INTEGER` | `YsBk` | 8 | 0 | 199 |  |
| `role9` | `number` | `DBOFIELDTYPE_INTEGER` | `rnxu` | 8 | 0 | 199 |  |
| `runningcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `ZeVz` | 17 | 0 | 100000 |  |
| `runningcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `oXYh` | 17 | 0 | 100000 |  |
| `runstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Tbvt` | 6 | 0 | 32 |  |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 |  |
| `shohan` | `number` | `DBOFIELDTYPE_INTEGER` | `NTFr` | 7 | 0 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skillmoves` | `number` | `DBOFIELDTYPE_INTEGER` | `BAPc` | 3 | 0 | 4 |  |
| `skillmoveslikelihood` | `number` | `DBOFIELDTYPE_INTEGER` | `PJsq` | 3 | 0 | 4 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 11 | 0 | 2047 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 10 | 0 | 1023 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 10 | 0 | 1023 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 10 | 0 | 1023 |  |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 10 | 0 | 1023 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 10 | 0 | 1023 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 10 | 0 | 1023 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 10 | 0 | 1023 |  |
| `trait1` | `number` | `DBOFIELDTYPE_INTEGER` | `juxV` | 30 | 0 | 1073741823 |  |
| `trait2` | `number` | `DBOFIELDTYPE_INTEGER` | `inAr` | 17 | 0 | 131071 |  |
| `undershortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `KCeP` | 1 | 0 | 1 |  |
| `usercaneditname` | `number` | `DBOFIELDTYPE_INTEGER` | `NBsd` | 1 | 0 | 1 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |
| `wage` | `number` | `DBOFIELDTYPE_INTEGER` | `cmGX` | 27 | 0 | 100000000 |  |
| `weakfootabilitytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `aOBn` | 3 | 1 | 5 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 150 |  |

## playersockoverride

Binary code: `MytH`. Record type: `Fc27Record<'playersockoverride', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `kittype` | `number` | `DBOFIELDTYPE_INTEGER` | `eRor` | 5 | 0 | 22 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `year` | `number` | `DBOFIELDTYPE_INTEGER` | `qFnd` | 11 | 0 | 2027 |  |

## playersuspensions

Binary code: `ySyc`. Record type: `Fc27Record<'playersuspensions', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 10 | 0 | 1000 | Yes |
| `enddate` | `number` | `DBOFIELDTYPE_DATE` | `ZPUX` | 20 | 0 | 1048575 |  |
| `games` | `number` | `DBOFIELDTYPE_INTEGER` | `YHEa` | 7 | 0 | 100 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## playervoicemap

Binary code: `WvnN`. Record type: `Fc27Record<'playervoicemap', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ispredefined` | `number` | `DBOFIELDTYPE_INTEGER` | `OcRb` | 1 | 0 | 1 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `singlevoice` | `number` | `DBOFIELDTYPE_INTEGER` | `Gufc` | 1 | 0 | 1 |  |
| `voiceid` | `number` | `DBOFIELDTYPE_INTEGER` | `qsVX` | 19 | -1 | 300000 |  |

## playstyle_attribute_requirement

Binary code: `PtOL`. Record type: `Fc27Record<'playstyle_attribute_requirement', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `playstyleattributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `tFrw` | 13 | 0 | 5000 | Yes |
| `playstyleid` | `number` | `DBOFIELDTYPE_INTEGER` | `eaiD` | 8 | 0 | 255 |  |
| `value` | `number` | `DBOFIELDTYPE_INTEGER` | `SbfX` | 8 | 0 | 255 |  |

## playstyles

Binary code: `LmCa`. Record type: `Fc27Record<'playstyles', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playstyleid` | `number` | `DBOFIELDTYPE_INTEGER` | `eaiD` | 8 | 0 | 255 | Yes |
| `type` | `string` | `DBOFIELDTYPE_STRING` | `ZpXz` | 360 | 0 | 0 |  |

## positionbonus

Binary code: `ODXK`. Record type: `Fc27Record<'positionbonus', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 3 | 0 | 4 | Yes |
| `att` | `number` | `DBOFIELDTYPE_INTEGER` | `NHAw` | 6 | 0 | 50 |  |
| `def` | `number` | `DBOFIELDTYPE_INTEGER` | `XIsP` | 6 | 0 | 50 |  |
| `gk` | `number` | `DBOFIELDTYPE_INTEGER` | `Qcnk` | 6 | 0 | 50 |  |
| `mid` | `number` | `DBOFIELDTYPE_INTEGER` | `OuhI` | 6 | 0 | 50 |  |

## presentationmodesettings

Binary code: `PViY`. Record type: `Fc27Record<'presentationmodesettings', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `isbrandpartnersenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `xGwA` | 1 | 0 | 1 |  |
| `iscompetitionspecificboardsmodeenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `CxKn` | 1 | 0 | 1 |  |
| `isgoallinetechforceenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `THOk` | 1 | 0 | 1 |  |
| `isuniqueadboardsmodeenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `AuVh` | 1 | 0 | 1 |  |
| `modeid` | `number` | `DBOFIELDTYPE_INTEGER` | `NuNs` | 10 | -1 | 512 | Yes |
| `modetypestr` | `string` | `DBOFIELDTYPE_STRING` | `XuPr` | 512 | 0 | 0 |  |

## preset_fat

Binary code: `YBNq`. Record type: `Fc27Record<'preset_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |
| `presetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ilsg` | 20 | 0 | 700000 | Yes |

## preset_flesh

Binary code: `TdMN`. Record type: `Fc27Record<'preset_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |
| `presetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ilsg` | 20 | 0 | 700000 | Yes |

## preset_skeletal

Binary code: `xKQd`. Record type: `Fc27Record<'preset_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 8 | -127 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |
| `presetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ilsg` | 20 | 0 | 700000 | Yes |

## preset_skins

Binary code: `ytIC`. Record type: `Fc27Record<'preset_skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `freckles0` | `number` | `DBOFIELDTYPE_INTEGER` | `HvlV` | 5 | 0 | 24 |  |
| `freckles1` | `number` | `DBOFIELDTYPE_INTEGER` | `IspD` | 5 | 0 | 24 |  |
| `freckles2` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBsd` | 5 | 0 | 24 |  |
| `freckles3` | `number` | `DBOFIELDTYPE_INTEGER` | `CCIT` | 5 | 0 | 24 |  |
| `freckles4` | `number` | `DBOFIELDTYPE_INTEGER` | `MGBc` | 5 | 0 | 24 |  |
| `freckles5` | `number` | `DBOFIELDTYPE_INTEGER` | `DNFe` | 5 | 0 | 24 |  |
| `freckles6` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgA` | 5 | 0 | 24 |  |
| `freckles7` | `number` | `DBOFIELDTYPE_INTEGER` | `JzwK` | 5 | 0 | 24 |  |
| `frecklesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `eIgP` | 7 | 0 | 100 |  |
| `frecklesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `hDQh` | 7 | 0 | 100 |  |
| `frecklesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `AKpf` | 7 | 0 | 100 |  |
| `frecklesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `fRlp` | 7 | 0 | 100 |  |
| `frecklesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `lhoq` | 7 | 0 | 100 |  |
| `frecklesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `aiYo` | 7 | 0 | 100 |  |
| `frecklesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `vbVW` | 7 | 0 | 100 |  |
| `frecklesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `kYRM` | 7 | 0 | 100 |  |
| `moles0` | `number` | `DBOFIELDTYPE_INTEGER` | `ohSp` | 5 | 0 | 24 |  |
| `moles1` | `number` | `DBOFIELDTYPE_INTEGER` | `baCr` | 5 | 0 | 24 |  |
| `moles2` | `number` | `DBOFIELDTYPE_INTEGER` | `qjbN` | 5 | 0 | 24 |  |
| `moles3` | `number` | `DBOFIELDTYPE_INTEGER` | `loXX` | 5 | 0 | 24 |  |
| `moles4` | `number` | `DBOFIELDTYPE_INTEGER` | `rEig` | 5 | 0 | 24 |  |
| `moles5` | `number` | `DBOFIELDTYPE_INTEGER` | `YHSO` | 5 | 0 | 24 |  |
| `moles6` | `number` | `DBOFIELDTYPE_INTEGER` | `pyPo` | 5 | 0 | 24 |  |
| `moles7` | `number` | `DBOFIELDTYPE_INTEGER` | `mxLe` | 5 | 0 | 24 |  |
| `molesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `pqyU` | 7 | 0 | 100 |  |
| `molesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `axuK` | 7 | 0 | 100 |  |
| `molesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `XoTA` | 7 | 0 | 100 |  |
| `molesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `EjDi` | 7 | 0 | 100 |  |
| `molesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `ivGt` | 7 | 0 | 100 |  |
| `molesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `hsCD` | 7 | 0 | 100 |  |
| `molesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `cBzJ` | 7 | 0 | 100 |  |
| `molesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `zCjL` | 7 | 0 | 100 |  |
| `presetid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ilsg` | 20 | 0 | 700000 | Yes |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## prevcompetitionstats

Binary code: `amvY`. Record type: `Fc27Record<'prevcompetitionstats', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `appearances` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWT` | 7 | 0 | 100 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 13 | 0 | 8000 | Yes |
| `assists` | `number` | `DBOFIELDTYPE_INTEGER` | `xEsZ` | 7 | 0 | 100 |  |
| `cleansheets` | `number` | `DBOFIELDTYPE_INTEGER` | `Ebea` | 7 | 0 | 100 |  |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 |  |
| `goals` | `number` | `DBOFIELDTYPE_INTEGER` | `MERA` | 7 | 0 | 100 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `redcards` | `number` | `DBOFIELDTYPE_INTEGER` | `ezJB` | 7 | 0 | 100 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `yellowcards` | `number` | `DBOFIELDTYPE_INTEGER` | `pGKt` | 7 | 0 | 100 |  |

## previousteam

Binary code: `rIsB`. Record type: `Fc27Record<'previousteam', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `previousteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `wDHM` | 18 | -1 | 200000 |  |

## rankweight

Binary code: `uuBj`. Record type: `Fc27Record<'rankweight', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `rank1` | `number` | `DBOFIELDTYPE_INTEGER` | `Uozf` | 6 | 0 | 40 |  |
| `rank2` | `number` | `DBOFIELDTYPE_INTEGER` | `RxuJ` | 6 | 0 | 40 |  |
| `rank3` | `number` | `DBOFIELDTYPE_INTEGER` | `KyeP` | 6 | 0 | 40 |  |
| `rank4` | `number` | `DBOFIELDTYPE_INTEGER` | `sOnI` | 6 | 0 | 40 |  |
| `rank5` | `number` | `DBOFIELDTYPE_INTEGER` | `XVjC` | 6 | 0 | 40 |  |
| `squadtype` | `number` | `DBOFIELDTYPE_INTEGER` | `DQkg` | 4 | 0 | 10 | Yes |

## referee

Binary code: `mMQM`. Record type: `Fc27Record<'referee', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `cardstrictness` | `number` | `DBOFIELDTYPE_INTEGER` | `sUgF` | 2 | 0 | 2 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `firstname` | `string` | `DBOFIELDTYPE_STRING` | `HdeP` | 152 | 0 | 0 |  |
| `foulstrictness` | `number` | `DBOFIELDTYPE_INTEGER` | `UWSO` | 2 | 0 | 2 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `isreal` | `number` | `DBOFIELDTYPE_INTEGER` | `gDvo` | 1 | 0 | 1 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `nationalitycode` | `number` | `DBOFIELDTYPE_INTEGER` | `UScu` | 12 | 0 | 3000 |  |
| `refereeid` | `number` | `DBOFIELDTYPE_INTEGER` | `Lfmt` | 19 | 1 | 500000 | Yes |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 11 | 0 | 2047 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `surname` | `string` | `DBOFIELDTYPE_STRING` | `rREd` | 152 | 0 | 0 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 115 |  |

## reset_cost

Binary code: `Qfkb`. Record type: `Fc27Record<'reset_cost', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `bracket` | `string` | `DBOFIELDTYPE_STRING` | `tNhk` | 360 | 0 | 0 |  |
| `costperap` | `number` | `DBOFIELDTYPE_INTEGER` | `Baus` | 19 | 0 | 500000 |  |
| `maxofrange` | `number` | `DBOFIELDTYPE_INTEGER` | `DnGI` | 19 | 0 | 500000 |  |
| `minofrange` | `number` | `DBOFIELDTYPE_INTEGER` | `CbcU` | 19 | 0 | 500000 |  |

## rivals

Binary code: `LbKk`. Record type: `Fc27Record<'rivals', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `rivaltype` | `number` | `DBOFIELDTYPE_INTEGER` | `ytXF` | 2 | 0 | 2 |  |
| `team1intensity` | `number` | `DBOFIELDTYPE_INTEGER` | `pkPy` | 3 | 1 | 5 |  |
| `team2intensity` | `number` | `DBOFIELDTYPE_INTEGER` | `mjQB` | 3 | 1 | 5 |  |
| `teamid1` | `number` | `DBOFIELDTYPE_INTEGER` | `fmFo` | 18 | -1 | 200000 | Yes |
| `teamid2` | `number` | `DBOFIELDTYPE_INTEGER` | `afAW` | 18 | -1 | 200000 |  |

## scenarioevents

Binary code: `WJjv`. Record type: `Fc27Record<'scenarioevents', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `eventid` | `number` | `DBOFIELDTYPE_INTEGER` | `CBIo` | 11 | 0 | 2047 | Yes |
| `minute` | `number` | `DBOFIELDTYPE_INTEGER` | `VOXO` | 8 | 0 | 255 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | 0 | 500000 |  |
| `scenarioid` | `number` | `DBOFIELDTYPE_INTEGER` | `JkPT` | 8 | 0 | 255 |  |
| `side` | `number` | `DBOFIELDTYPE_INTEGER` | `aCPD` | 1 | 0 | 1 |  |
| `type` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpXz` | 5 | -1 | 30 |  |

## scenariosettings

Binary code: `wgLZ`. Record type: `Fc27Record<'scenariosettings', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `awaypossesion` | `number` | `DBOFIELDTYPE_INTEGER` | `uQoJ` | 8 | 0 | 255 |  |
| `awayscore` | `number` | `DBOFIELDTYPE_INTEGER` | `OyST` | 8 | 0 | 255 |  |
| `balllocation` | `number` | `DBOFIELDTYPE_INTEGER` | `IXYR` | 5 | 0 | 31 |  |
| `ballpositionx` | `number \| null` | `DBOFIELDTYPE_REAL` | `XrDW` | 32 | 0 | 0 |  |
| `ballpositiony` | `number \| null` | `DBOFIELDTYPE_REAL` | `EozM` | 32 | 0 | 0 |  |
| `endhalf` | `number` | `DBOFIELDTYPE_INTEGER` | `UXGM` | 5 | 0 | 31 |  |
| `hasplaysettings` | `number` | `DBOFIELDTYPE_INTEGER` | `WiFz` | 1 | 0 | 1 |  |
| `homepossesion` | `number` | `DBOFIELDTYPE_INTEGER` | `kZua` | 8 | 0 | 255 |  |
| `homescore` | `number` | `DBOFIELDTYPE_INTEGER` | `CDSO` | 8 | 0 | 255 |  |
| `injurytime` | `number` | `DBOFIELDTYPE_INTEGER` | `vBoT` | 8 | 0 | 255 |  |
| `inputdelay` | `number \| null` | `DBOFIELDTYPE_REAL` | `qRkU` | 32 | 0 | 0 |  |
| `playerinpossesion` | `number` | `DBOFIELDTYPE_INTEGER` | `sVPA` | 19 | 0 | 500000 |  |
| `scenarioid` | `number` | `DBOFIELDTYPE_INTEGER` | `JkPT` | 8 | 0 | 255 | Yes |
| `starthalf` | `number` | `DBOFIELDTYPE_INTEGER` | `yPzi` | 5 | 0 | 31 |  |
| `startminute` | `number` | `DBOFIELDTYPE_INTEGER` | `pRwm` | 8 | 0 | 255 |  |
| `teaminpossesion` | `number` | `DBOFIELDTYPE_INTEGER` | `yJql` | 1 | 0 | 1 |  |

## seatcolor

Binary code: `irOE`. Record type: `Fc27Record<'seatcolor', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `colorvalue` | `string` | `DBOFIELDTYPE_STRING` | `fOYI` | 520 | 0 | 0 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |

## shoecolors

Binary code: `EVxj`. Record type: `Fc27Record<'shoecolors', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `blue` | `number` | `DBOFIELDTYPE_INTEGER` | `HxOC` | 8 | 0 | 255 |  |
| `colorid` | `number` | `DBOFIELDTYPE_INTEGER` | `ApfX` | 5 | 0 | 31 | Yes |
| `green` | `number` | `DBOFIELDTYPE_INTEGER` | `rClK` | 8 | 0 | 255 |  |
| `red` | `number` | `DBOFIELDTYPE_INTEGER` | `RFOx` | 8 | 0 | 255 |  |

## signature_perks

Binary code: `qHME`. Record type: `Fc27Record<'signature_perks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 8 | 0 | 255 | Yes |
| `perkid` | `number` | `DBOFIELDTYPE_INTEGER` | `bOld` | 8 | 0 | 255 |  |
| `unlockorder` | `number` | `DBOFIELDTYPE_INTEGER` | `TgHL` | 8 | 0 | 255 |  |

## signature_playstyles

Binary code: `EIue`. Record type: `Fc27Record<'signature_playstyles', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `archetypeplaystyleid` | `number` | `DBOFIELDTYPE_INTEGER` | `bzqh` | 13 | 0 | 5000 |  |
| `playstyleid` | `number` | `DBOFIELDTYPE_INTEGER` | `eaiD` | 8 | 0 | 255 |  |
| `unlockorder` | `number` | `DBOFIELDTYPE_INTEGER` | `TgHL` | 8 | 0 | 255 |  |

## signatureabilitymap

Binary code: `xiJh`. Record type: `Fc27Record<'signatureabilitymap', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `cooldownduration` | `number` | `DBOFIELDTYPE_INTEGER` | `BmoK` | 9 | 0 | 300 |  |
| `gameid` | `number` | `DBOFIELDTYPE_INTEGER` | `eBLJ` | 4 | 0 | 8 | Yes |
| `powerduration` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzvk` | 9 | 0 | 300 |  |
| `startchargepercentage` | `number \| null` | `DBOFIELDTYPE_REAL` | `oXkx` | 32 | 0 | 0 |  |

## skillmeterchargecondition

Binary code: `aIfc`. Record type: `Fc27Record<'skillmeterchargecondition', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gameid` | `number` | `DBOFIELDTYPE_INTEGER` | `eBLJ` | 4 | 0 | 8 | Yes |
| `isenable` | `number` | `DBOFIELDTYPE_INTEGER` | `UnCR` | 1 | 0 | 1 |  |

## skins

Binary code: `anIr`. Record type: `Fc27Record<'skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 20 | 0 | 700000 | Yes |
| `freckles0` | `number` | `DBOFIELDTYPE_INTEGER` | `HvlV` | 5 | 0 | 24 |  |
| `freckles1` | `number` | `DBOFIELDTYPE_INTEGER` | `IspD` | 5 | 0 | 24 |  |
| `freckles2` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBsd` | 5 | 0 | 24 |  |
| `freckles3` | `number` | `DBOFIELDTYPE_INTEGER` | `CCIT` | 5 | 0 | 24 |  |
| `freckles4` | `number` | `DBOFIELDTYPE_INTEGER` | `MGBc` | 5 | 0 | 24 |  |
| `freckles5` | `number` | `DBOFIELDTYPE_INTEGER` | `DNFe` | 5 | 0 | 24 |  |
| `freckles6` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgA` | 5 | 0 | 24 |  |
| `freckles7` | `number` | `DBOFIELDTYPE_INTEGER` | `JzwK` | 5 | 0 | 24 |  |
| `frecklesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `eIgP` | 7 | 0 | 100 |  |
| `frecklesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `hDQh` | 7 | 0 | 100 |  |
| `frecklesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `AKpf` | 7 | 0 | 100 |  |
| `frecklesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `fRlp` | 7 | 0 | 100 |  |
| `frecklesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `lhoq` | 7 | 0 | 100 |  |
| `frecklesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `aiYo` | 7 | 0 | 100 |  |
| `frecklesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `vbVW` | 7 | 0 | 100 |  |
| `frecklesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `kYRM` | 7 | 0 | 100 |  |
| `moles0` | `number` | `DBOFIELDTYPE_INTEGER` | `ohSp` | 5 | 0 | 24 |  |
| `moles1` | `number` | `DBOFIELDTYPE_INTEGER` | `baCr` | 5 | 0 | 24 |  |
| `moles2` | `number` | `DBOFIELDTYPE_INTEGER` | `qjbN` | 5 | 0 | 24 |  |
| `moles3` | `number` | `DBOFIELDTYPE_INTEGER` | `loXX` | 5 | 0 | 24 |  |
| `moles4` | `number` | `DBOFIELDTYPE_INTEGER` | `rEig` | 5 | 0 | 24 |  |
| `moles5` | `number` | `DBOFIELDTYPE_INTEGER` | `YHSO` | 5 | 0 | 24 |  |
| `moles6` | `number` | `DBOFIELDTYPE_INTEGER` | `pyPo` | 5 | 0 | 24 |  |
| `moles7` | `number` | `DBOFIELDTYPE_INTEGER` | `mxLe` | 5 | 0 | 24 |  |
| `molesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `pqyU` | 7 | 0 | 100 |  |
| `molesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `axuK` | 7 | 0 | 100 |  |
| `molesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `XoTA` | 7 | 0 | 100 |  |
| `molesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `EjDi` | 7 | 0 | 100 |  |
| `molesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `ivGt` | 7 | 0 | 100 |  |
| `molesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `hsCD` | 7 | 0 | 100 |  |
| `molesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `cBzJ` | 7 | 0 | 100 |  |
| `molesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `zCjL` | 7 | 0 | 100 |  |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## slc

Binary code: `ntyU`. Record type: `Fc27Record<'slc', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 8 | 1 | 256 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 4 | 1 | 16 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `policeregion` | `number` | `DBOFIELDTYPE_INTEGER` | `ifDe` | 4 | 0 | 15 |  |
| `region` | `number` | `DBOFIELDTYPE_INTEGER` | `AKVF` | 4 | 0 | 15 |  |
| `seasonalhair` | `number` | `DBOFIELDTYPE_INTEGER` | `qLXP` | 14 | 0 | 10000 |  |
| `seasonaloutfit` | `number` | `DBOFIELDTYPE_INTEGER` | `nxLk` | 20 | 0 | 1000000 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `slcid` | `number` | `DBOFIELDTYPE_INTEGER` | `KlqM` | 8 | 60100 | 60299 | Yes |
| `slctype` | `number` | `DBOFIELDTYPE_INTEGER` | `ERwL` | 6 | -1 | 32 |  |
| `variation` | `number` | `DBOFIELDTYPE_INTEGER` | `KCfp` | 4 | 0 | 15 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 115 |  |

## slc_competition_overrides

Binary code: `rovx`. Record type: `Fc27Record<'slc_competition_overrides', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `competitionid` | `number` | `DBOFIELDTYPE_INTEGER` | `LhXN` | 24 | 0 | 9999999 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `seasonaloutfit` | `number` | `DBOFIELDTYPE_INTEGER` | `nxLk` | 20 | 0 | 1000000 |  |
| `slcid` | `number` | `DBOFIELDTYPE_INTEGER` | `KlqM` | 8 | 60100 | 60299 | Yes |

## slc_fat

Binary code: `xzEJ`. Record type: `Fc27Record<'slc_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60100 | 60299 | Yes |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |

## slc_flesh

Binary code: `KZHj`. Record type: `Fc27Record<'slc_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60100 | 60299 | Yes |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |

## slc_skeletal

Binary code: `nTVv`. Record type: `Fc27Record<'slc_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60100 | 60299 | Yes |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 7 | 0 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 7 | 0 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |

## slc_skins

Binary code: `fhLs`. Record type: `Fc27Record<'slc_skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60100 | 60299 | Yes |
| `freckles0` | `number` | `DBOFIELDTYPE_INTEGER` | `HvlV` | 5 | 0 | 24 |  |
| `freckles1` | `number` | `DBOFIELDTYPE_INTEGER` | `IspD` | 5 | 0 | 24 |  |
| `freckles2` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBsd` | 5 | 0 | 24 |  |
| `freckles3` | `number` | `DBOFIELDTYPE_INTEGER` | `CCIT` | 5 | 0 | 24 |  |
| `freckles4` | `number` | `DBOFIELDTYPE_INTEGER` | `MGBc` | 5 | 0 | 24 |  |
| `freckles5` | `number` | `DBOFIELDTYPE_INTEGER` | `DNFe` | 5 | 0 | 24 |  |
| `freckles6` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgA` | 5 | 0 | 24 |  |
| `freckles7` | `number` | `DBOFIELDTYPE_INTEGER` | `JzwK` | 5 | 0 | 24 |  |
| `frecklesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `eIgP` | 7 | 0 | 100 |  |
| `frecklesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `hDQh` | 7 | 0 | 100 |  |
| `frecklesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `AKpf` | 7 | 0 | 100 |  |
| `frecklesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `fRlp` | 7 | 0 | 100 |  |
| `frecklesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `lhoq` | 7 | 0 | 100 |  |
| `frecklesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `aiYo` | 7 | 0 | 100 |  |
| `frecklesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `vbVW` | 7 | 0 | 100 |  |
| `frecklesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `kYRM` | 7 | 0 | 100 |  |
| `moles0` | `number` | `DBOFIELDTYPE_INTEGER` | `ohSp` | 5 | 0 | 24 |  |
| `moles1` | `number` | `DBOFIELDTYPE_INTEGER` | `baCr` | 5 | 0 | 24 |  |
| `moles2` | `number` | `DBOFIELDTYPE_INTEGER` | `qjbN` | 5 | 0 | 24 |  |
| `moles3` | `number` | `DBOFIELDTYPE_INTEGER` | `loXX` | 5 | 0 | 24 |  |
| `moles4` | `number` | `DBOFIELDTYPE_INTEGER` | `rEig` | 5 | 0 | 24 |  |
| `moles5` | `number` | `DBOFIELDTYPE_INTEGER` | `YHSO` | 5 | 0 | 24 |  |
| `moles6` | `number` | `DBOFIELDTYPE_INTEGER` | `pyPo` | 5 | 0 | 24 |  |
| `moles7` | `number` | `DBOFIELDTYPE_INTEGER` | `mxLe` | 5 | 0 | 24 |  |
| `molesweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `pqyU` | 7 | 0 | 100 |  |
| `molesweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `axuK` | 7 | 0 | 100 |  |
| `molesweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `XoTA` | 7 | 0 | 100 |  |
| `molesweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `EjDi` | 7 | 0 | 100 |  |
| `molesweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `ivGt` | 7 | 0 | 100 |  |
| `molesweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `hsCD` | 7 | 0 | 100 |  |
| `molesweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `cBzJ` | 7 | 0 | 100 |  |
| `molesweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `zCjL` | 7 | 0 | 100 |  |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## smplayers

Binary code: `vGSz`. Record type: `Fc27Record<'smplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 8 | 0 | 255 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 8 | 0 | 255 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 8 | 0 | 255 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 8 | 0 | 255 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `animfreekickstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `jLuE` | 5 | 0 | 31 |  |
| `animpenaltiesstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `naby` | 5 | 0 | 31 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 19 | -1 | 500000 | Yes |
| `avatarpomid` | `number` | `DBOFIELDTYPE_INTEGER` | `VRvd` | 9 | 0 | 511 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `commonnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `HDYx` | 16 | 0 | 53500 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `contractvaliduntil` | `number` | `DBOFIELDTYPE_INTEGER` | `qvmK` | 7 | 2000 | 2120 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `defspe` | `number` | `DBOFIELDTYPE_INTEGER` | `aEqa` | 7 | 0 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `driref` | `number` | `DBOFIELDTYPE_INTEGER` | `zNYP` | 7 | 0 | 99 |  |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 1 | 5 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `finishingcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `GFLI` | 17 | 0 | 100000 |  |
| `finishingcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `LwOe` | 17 | 0 | 100000 |  |
| `firstnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `tHlO` | 16 | 0 | 53500 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkglovetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `GReX` | 10 | 0 | 1023 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkkickstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `rJqp` | 2 | 0 | 3 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `gksavetype` | `number` | `DBOFIELDTYPE_INTEGER` | `SJED` | 1 | 0 | 1 |  |
| `growthprofile` | `number` | `DBOFIELDTYPE_INTEGER` | `OwTX` | 4 | 0 | 8 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `hasseasonaljersey` | `number` | `DBOFIELDTYPE_INTEGER` | `iCDR` | 3 | 0 | 7 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 220 |  |
| `icontrait1` | `number` | `DBOFIELDTYPE_INTEGER` | `OjQY` | 30 | 0 | 1073741823 |  |
| `icontrait2` | `number` | `DBOFIELDTYPE_INTEGER` | `PqtG` | 17 | 0 | 131071 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `internationalrep` | `number` | `DBOFIELDTYPE_INTEGER` | `WVsa` | 3 | 1 | 5 |  |
| `iscustomized` | `number` | `DBOFIELDTYPE_INTEGER` | `Oirg` | 1 | 0 | 1 |  |
| `isretiring` | `number` | `DBOFIELDTYPE_INTEGER` | `kvuF` | 1 | 0 | 1 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 2 | 0 | 2 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `jerseystylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `miIB` | 1 | 0 | 1 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `lastnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `QCfa` | 16 | 0 | 53500 |  |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `modifier` | `number` | `DBOFIELDTYPE_INTEGER` | `isYi` | 4 | -5 | 5 |  |
| `muscularitycode` | `number` | `DBOFIELDTYPE_INTEGER` | `MUYu` | 1 | 0 | 1 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 1 | 100 |  |
| `pacdiv` | `number` | `DBOFIELDTYPE_INTEGER` | `aapy` | 7 | 0 | 99 |  |
| `paskic` | `number` | `DBOFIELDTYPE_INTEGER` | `ceRf` | 7 | 0 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `personality` | `number` | `DBOFIELDTYPE_INTEGER` | `hxxo` | 3 | 1 | 5 |  |
| `phypos` | `number` | `DBOFIELDTYPE_INTEGER` | `hdMV` | 7 | 0 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `playerjerseynameid` | `number` | `DBOFIELDTYPE_INTEGER` | `Vqpv` | 16 | 0 | 53500 |  |
| `playerjointeamdate` | `number` | `DBOFIELDTYPE_DATE` | `vTpl` | 20 | 0 | 1048575 |  |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `preferredfoot` | `number` | `DBOFIELDTYPE_INTEGER` | `MDvm` | 1 | 1 | 2 |  |
| `preferredposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `wZQU` | 5 | 0 | 31 |  |
| `preferredposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `NgVS` | 6 | -1 | 32 |  |
| `preferredposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `OblE` | 6 | -1 | 32 |  |
| `preferredposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `YnYz` | 6 | -1 | 32 |  |
| `preferredposition5` | `number` | `DBOFIELDTYPE_INTEGER` | `rkcN` | 6 | -1 | 32 |  |
| `preferredposition6` | `number` | `DBOFIELDTYPE_INTEGER` | `GdFb` | 6 | -1 | 32 |  |
| `preferredposition7` | `number` | `DBOFIELDTYPE_INTEGER` | `VeVh` | 6 | -1 | 32 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `releaseclause` | `number` | `DBOFIELDTYPE_INTEGER` | `pSzm` | 30 | 0 | 1000000000 |  |
| `role1` | `number` | `DBOFIELDTYPE_INTEGER` | `FYhg` | 8 | 0 | 199 |  |
| `role2` | `number` | `DBOFIELDTYPE_INTEGER` | `ERce` | 8 | 0 | 199 |  |
| `role3` | `number` | `DBOFIELDTYPE_INTEGER` | `HSMQ` | 8 | 0 | 199 |  |
| `role4` | `number` | `DBOFIELDTYPE_INTEGER` | `hGZL` | 8 | 0 | 199 |  |
| `role5` | `number` | `DBOFIELDTYPE_INTEGER` | `yNVZ` | 8 | 0 | 199 |  |
| `role6` | `number` | `DBOFIELDTYPE_INTEGER` | `zUsn` | 8 | 0 | 199 |  |
| `role7` | `number` | `DBOFIELDTYPE_INTEGER` | `MPct` | 8 | 0 | 199 |  |
| `role8` | `number` | `DBOFIELDTYPE_INTEGER` | `YsBk` | 8 | 0 | 199 |  |
| `role9` | `number` | `DBOFIELDTYPE_INTEGER` | `rnxu` | 8 | 0 | 199 |  |
| `runningcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `ZeVz` | 17 | 0 | 100000 |  |
| `runningcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `oXYh` | 17 | 0 | 100000 |  |
| `runstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Tbvt` | 6 | 0 | 32 |  |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 |  |
| `shohan` | `number` | `DBOFIELDTYPE_INTEGER` | `NTFr` | 7 | 0 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skillmoves` | `number` | `DBOFIELDTYPE_INTEGER` | `BAPc` | 3 | 0 | 4 |  |
| `skillmoveslikelihood` | `number` | `DBOFIELDTYPE_INTEGER` | `PJsq` | 3 | 0 | 4 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 11 | 0 | 2047 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 10 | 0 | 1023 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 10 | 0 | 1023 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 10 | 0 | 1023 |  |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 10 | 0 | 1023 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 10 | 0 | 1023 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 10 | 0 | 1023 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 10 | 0 | 1023 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `trait1` | `number` | `DBOFIELDTYPE_INTEGER` | `juxV` | 30 | 0 | 1073741823 |  |
| `trait2` | `number` | `DBOFIELDTYPE_INTEGER` | `inAr` | 17 | 0 | 131071 |  |
| `undershortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `KCeP` | 1 | 0 | 1 |  |
| `usercaneditname` | `number` | `DBOFIELDTYPE_INTEGER` | `NBsd` | 1 | 0 | 1 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |
| `wage` | `number` | `DBOFIELDTYPE_INTEGER` | `cmGX` | 27 | 0 | 100000000 |  |
| `weakfootabilitytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `aOBn` | 3 | 1 | 5 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 150 |  |

## smteams

Binary code: `gBTf`. Record type: `Fc27Record<'smteams', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 32 | -2147483648 | 2147483647 |  |
| `attackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UAKP` | 7 | 0 | 99 |  |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 |  |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | -1 | 500000 |  |
| `cityid` | `number` | `DBOFIELDTYPE_INTEGER` | `pNIL` | 10 | 0 | 1023 |  |
| `cksupport1` | `number` | `DBOFIELDTYPE_INTEGER` | `tFoZ` | 19 | 0 | 500000 |  |
| `cksupport2` | `number` | `DBOFIELDTYPE_INTEGER` | `cwNn` | 19 | 0 | 500000 |  |
| `cksupport3` | `number` | `DBOFIELDTYPE_INTEGER` | `nzJx` | 19 | 0 | 500000 |  |
| `cksupport4` | `number` | `DBOFIELDTYPE_INTEGER` | `pbQy` | 19 | 0 | 500000 |  |
| `cksupport5` | `number` | `DBOFIELDTYPE_INTEGER` | `mgAw` | 19 | 0 | 500000 |  |
| `cksupport6` | `number` | `DBOFIELDTYPE_INTEGER` | `XpxO` | 19 | 0 | 500000 |  |
| `cksupport7` | `number` | `DBOFIELDTYPE_INTEGER` | `sitE` | 19 | 0 | 500000 |  |
| `cksupport8` | `number` | `DBOFIELDTYPE_INTEGER` | `gZYN` | 19 | 0 | 500000 |  |
| `cksupport9` | `number` | `DBOFIELDTYPE_INTEGER` | `fSIH` | 19 | 0 | 500000 |  |
| `clubworth` | `number` | `DBOFIELDTYPE_INTEGER` | `QSnJ` | 24 | 0 | 9999999 |  |
| `cornerflagpolecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `tYEa` | 5 | 0 | 20 |  |
| `crowdregion` | `number` | `DBOFIELDTYPE_INTEGER` | `Edjp` | 5 | 0 | 31 |  |
| `crowdskintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `KvHw` | 7 | 0 | 100 |  |
| `defenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `btsS` | 7 | 0 | 99 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `domesticcups` | `number` | `DBOFIELDTYPE_INTEGER` | `zqra` | 10 | 0 | 1023 |  |
| `domesticprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `ppLE` | 5 | 0 | 20 |  |
| `ethnicity` | `number` | `DBOFIELDTYPE_INTEGER` | `aArc` | 4 | 1 | 11 |  |
| `favoriteteamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `PccS` | 10 | -1 | 1000 |  |
| `flamethrowercannon` | `number` | `DBOFIELDTYPE_INTEGER` | `pqZD` | 3 | 0 | 4 |  |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 7 | 0 | 100 |  |
| `foundationyear` | `number` | `DBOFIELDTYPE_INTEGER` | `yDDQ` | 8 | 1800 | 2050 |  |
| `freekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `LfBw` | 19 | -1 | 500000 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `genericbanner` | `number` | `DBOFIELDTYPE_INTEGER` | `jfmo` | 1 | 0 | 1 |  |
| `genericint1` | `number` | `DBOFIELDTYPE_INTEGER` | `NSMy` | 7 | -1 | 100 |  |
| `genericint2` | `number` | `DBOFIELDTYPE_INTEGER` | `MLlE` | 7 | -1 | 100 |  |
| `goalnetstanchioncolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `Tnbc` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `PNLv` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `WELo` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `gCAn` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `oEoM` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `BZQX` | 8 | 0 | 255 |  |
| `haslargeflag` | `number` | `DBOFIELDTYPE_INTEGER` | `QgOx` | 2 | 0 | 2 |  |
| `hasstandingcrowd` | `number` | `DBOFIELDTYPE_INTEGER` | `NOYS` | 2 | 0 | 3 |  |
| `hassubstitutionboard` | `number` | `DBOFIELDTYPE_INTEGER` | `kfND` | 1 | 0 | 1 |  |
| `hassuncanthem` | `number` | `DBOFIELDTYPE_INTEGER` | `sqra` | 1 | 0 | 1 |  |
| `hastifo` | `number` | `DBOFIELDTYPE_INTEGER` | `BdXK` | 2 | 0 | 2 |  |
| `hasvikingclap` | `number` | `DBOFIELDTYPE_INTEGER` | `VsCG` | 1 | 0 | 1 |  |
| `internationalprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `edvw` | 5 | 0 | 20 |  |
| `isbannerenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `uhiM` | 2 | 0 | 2 |  |
| `iscompetitioncrowdcardsenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `FtgW` | 2 | 0 | 3 |  |
| `iscompetitionpoleflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `eLCT` | 2 | 0 | 2 |  |
| `iscompetitionscarfenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `VtHL` | 2 | 0 | 2 |  |
| `jerseytype` | `number` | `DBOFIELDTYPE_INTEGER` | `zgDG` | 2 | 0 | 2 |  |
| `latitude` | `number` | `DBOFIELDTYPE_INTEGER` | `sjQg` | 8 | -90 | 90 |  |
| `leaguetitles` | `number` | `DBOFIELDTYPE_INTEGER` | `cpXo` | 10 | 0 | 1023 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | -1 | 500000 |  |
| `leftfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WLKn` | 19 | -1 | 500000 |  |
| `longitude` | `number` | `DBOFIELDTYPE_INTEGER` | `NQXQ` | 9 | -180 | 180 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | -1 | 500000 |  |
| `matchdayattackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `jmRz` | 7 | 0 | 99 |  |
| `matchdaydefenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `zHfR` | 7 | 0 | 99 |  |
| `matchdaymidfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `HHDP` | 7 | 0 | 99 |  |
| `matchdayoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `sqCP` | 7 | 0 | 99 |  |
| `midfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `SqFN` | 7 | 0 | 99 |  |
| `numtransfersin` | `number` | `DBOFIELDTYPE_INTEGER` | `Gjri` | 5 | 0 | 31 |  |
| `opponentstrongthreshold` | `number` | `DBOFIELDTYPE_INTEGER` | `MQCj` | 8 | -100 | 100 |  |
| `opponentweakthreshold` | `number` | `DBOFIELDTYPE_INTEGER` | `Umue` | 8 | -100 | 100 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 0 | 99 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | -1 | 500000 |  |
| `personalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `IIKl` | 2 | 0 | 2 |  |
| `pitchcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `lzGH` | 4 | 0 | 10 |  |
| `pitchlinecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `IOSv` | 4 | 0 | 10 |  |
| `pitchwear` | `number` | `DBOFIELDTYPE_INTEGER` | `kjiI` | 4 | 0 | 10 |  |
| `playsurfacetype` | `number` | `DBOFIELDTYPE_INTEGER` | `vFwL` | 3 | 0 | 7 |  |
| `popularity` | `number` | `DBOFIELDTYPE_INTEGER` | `FcOK` | 4 | 0 | 10 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |
| `presassetone` | `number` | `DBOFIELDTYPE_INTEGER` | `TdUB` | 1 | 0 | 1 |  |
| `presassettwo` | `number` | `DBOFIELDTYPE_INTEGER` | `UjYK` | 2 | 0 | 3 |  |
| `prev_el_champ` | `number` | `DBOFIELDTYPE_INTEGER` | `YTAn` | 1 | 0 | 1 |  |
| `profitability` | `number` | `DBOFIELDTYPE_INTEGER` | `hXEu` | 4 | 0 | 10 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | -1 | 500000 |  |
| `rightfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `TxVD` | 19 | -1 | 500000 |  |
| `rivalteam` | `number` | `DBOFIELDTYPE_INTEGER` | `erSL` | 18 | 1 | 200000 |  |
| `skinnyflags` | `number` | `DBOFIELDTYPE_INTEGER` | `WwbT` | 1 | 0 | 1 |  |
| `stadiumgoalnetpattern` | `number` | `DBOFIELDTYPE_INTEGER` | `LOZj` | 1 | 0 | 1 |  |
| `stadiumgoalnetstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `CauK` | 6 | 0 | 63 |  |
| `stadiummowpattern_code` | `number` | `DBOFIELDTYPE_INTEGER` | `dUTO` | 5 | 0 | 17 |  |
| `stanchionflamethrower` | `number` | `DBOFIELDTYPE_INTEGER` | `XDPj` | 2 | 0 | 2 |  |
| `teamcolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `EVjc` | 8 | 0 | 255 |  |
| `teamcolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `UrDD` | 8 | 0 | 255 |  |
| `teamcolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `lWTE` | 8 | 0 | 255 |  |
| `teamcolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `PcIL` | 8 | 0 | 255 |  |
| `teamcolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `rags` | 8 | 0 | 255 |  |
| `teamcolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `KzYP` | 8 | 0 | 255 |  |
| `teamcolor3b` | `number` | `DBOFIELDTYPE_INTEGER` | `Gzty` | 8 | 0 | 255 |  |
| `teamcolor3g` | `number` | `DBOFIELDTYPE_INTEGER` | `Olxh` | 8 | 0 | 255 |  |
| `teamcolor3r` | `number` | `DBOFIELDTYPE_INTEGER` | `Tsda` | 8 | 0 | 255 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `teamname` | `string` | `DBOFIELDTYPE_STRING` | `AUsv` | 480 | 0 | 0 |  |
| `teamstadiumcapacity` | `number` | `DBOFIELDTYPE_INTEGER` | `TehK` | 20 | 0 | 999999 |  |
| `throwerleft` | `number` | `DBOFIELDTYPE_INTEGER` | `xPHY` | 19 | 0 | 500000 |  |
| `throwerright` | `number` | `DBOFIELDTYPE_INTEGER` | `Uwwk` | 19 | 0 | 500000 |  |
| `trainingstadium` | `number` | `DBOFIELDTYPE_INTEGER` | `WvVx` | 11 | 0 | 2000 |  |
| `trait1vequal` | `number` | `DBOFIELDTYPE_INTEGER` | `TPvg` | 23 | 0 | 8388607 |  |
| `trait1vstrong` | `number` | `DBOFIELDTYPE_INTEGER` | `aDMz` | 23 | 0 | 8388607 |  |
| `trait1vweak` | `number` | `DBOFIELDTYPE_INTEGER` | `kzMW` | 23 | 0 | 8388607 |  |
| `uefa_cl_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `hJha` | 9 | 0 | 256 |  |
| `uefa_consecutive_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `ZKAU` | 9 | 0 | 256 |  |
| `uefa_el_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `yhYg` | 9 | 0 | 256 |  |
| `uefa_uecl_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `igKs` | 9 | 0 | 256 |  |
| `utcoffset` | `number` | `DBOFIELDTYPE_INTEGER` | `Csgu` | 5 | -12 | 13 |  |
| `youthdevelopment` | `number` | `DBOFIELDTYPE_INTEGER` | `HNrf` | 4 | 0 | 10 |  |

## spa

Binary code: `fYGF`. Record type: `Fc27Record<'spa', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 8 | 1 | 256 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 4 | 1 | 16 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 11 | 0 | 2047 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 215 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 5 | 0 | 20 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 20 | 0 | 1000000 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 4 | 0 | 11 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 5 | 0 | 20 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 4 | 0 | 11 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 8 | 0 | 160 |  |
| `spaid` | `number` | `DBOFIELDTYPE_INTEGER` | `TCSJ` | 8 | 60300 | 60499 | Yes |

## spa_fat

Binary code: `zjNl`. Record type: `Fc27Record<'spa_fat', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60300 | 60499 | Yes |
| `ca_earAntihelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VXOi` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xcrC` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mZvo` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `idFG` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Gqga` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `dbIQ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tZjp` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vaax` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WXav` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ebUR` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CsNZ` | 8 | -127 | 127 |  |
| `ca_earAntihelix_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pdtT` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sGRR` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UNUZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zwET` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ysbS` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `WbGm` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VuuE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rUhE` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PDAk` | 8 | -127 | 127 |  |
| `ca_earHelix_NL_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kSoG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EIQG` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gLRa` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vuFQ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OqGZ` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mdXh` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `xwPL` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `nSAT` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LFlP` | 8 | -127 | 127 |  |
| `ca_earHelix_NR_SXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wUVd` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `zupp` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bNwR` | 8 | -127 | 127 |  |
| `ca_earlobe_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `sIsj` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vwEu` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XLdK` | 8 | -127 | 127 |  |
| `ca_earlobe_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EGdo` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Fuge` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dNFa` | 8 | -127 | 127 |  |
| `ca_eartragus_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WIBQ` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dwNN` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BLUt` | 8 | -127 | 127 |  |
| `ca_eartragus_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GGUz` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `xkvK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Vnmq` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `CSiI` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Tuxt` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MaZv` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oNIr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DMwB` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mQPQ` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `raCu` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PhHm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `McPM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `RoQV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wVNW` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UCwK` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nDIo` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SfDx` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fzyy` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hwjm` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ARTM` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JNsV` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EoDr` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grav` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jmaF` | 8 | -127 | 127 |  |
| `ca_noseAla_NL_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ealM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `BiuJ` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpjB` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qUjz` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `XwcG` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AcIM` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cLdY` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HKNS` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `aOSL` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HcDF` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ffCl` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `oaOP` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `hmxy` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kTwt` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IERx` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rFZD` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GhGm` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `vBfR` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `XuyV` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cPmf` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ZLtO` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ommI` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Qtvc` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HorW` | 8 | -127 | 127 |  |
| `ca_noseAla_NR_XXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OcoH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jnBI` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LkgA` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EBYy` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NdnH` | 8 | -127 | 127 |  |
| `ca_noseColumella_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GoqU` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kWKb` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IJTH` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `PYTl` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMMA` | 8 | -127 | 127 |  |
| `ca_noseSupratip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `YxCP` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PJiv` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKzH` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ILnl` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tvsc` | 8 | -127 | 127 |  |
| `ca_noseTip_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `dKhT` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hREd` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kCND` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lPpG` | 8 | -127 | 127 |  |
| `fa_cheeksMiddle_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `wEIY` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zNdq` | 8 | -127 | 127 |  |
| `fa_cheeks_NL_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `aGIU` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vLgJ` | 8 | -127 | 127 |  |
| `fa_cheeks_NR_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OIZD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `arOD` | 8 | -127 | 127 |  |
| `fa_earHelix_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Nhdb` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `CtPU` | 8 | -127 | 127 |  |
| `fa_earHelix_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Rfgw` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MOcH` | 8 | -127 | 127 |  |
| `fa_forehead_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `pFhZ` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NgPc` | 8 | -127 | 127 |  |
| `fa_forehead_NN_XMX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grKC` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kQJM` | 8 | -127 | 127 |  |
| `fa_forehead_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FDgS` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NKqA` | 8 | -127 | 127 |  |
| `fa_jowl_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `AJXe` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aIhc` | 8 | -127 | 127 |  |
| `fa_jowl_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PPkC` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RMbT` | 8 | -127 | 127 |  |
| `fa_jowl_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `MHSN` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CGMr` | 8 | -127 | 127 |  |
| `fa_jowl_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zRlp` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zjkr` | 8 | -127 | 127 |  |
| `fa_lip_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KotV` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QRzP` | 8 | -127 | 127 |  |
| `fa_lip_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dCax` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LlpI` | 8 | -127 | 127 |  |
| `fa_lip_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OmIC` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `APyk` | 8 | -127 | 127 |  |
| `fa_lip_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `FEva` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ulYq` | 8 | -127 | 127 |  |
| `fa_mental_NN_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `jmto` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fkHk` | 8 | -127 | 127 |  |
| `fa_mental_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Sjea` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PByJ` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `iSvX` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `grph` | 8 | -127 | 127 |  |
| `fa_nasolabial_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BgIz` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `fzzK` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `GUaU` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Utkm` | 8 | -127 | 127 |  |
| `fa_nasolabial_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xets` | 8 | -127 | 127 |  |
| `fa_neck_NL_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ptJC` | 8 | -127 | 127 |  |
| `fa_neck_NR_XXP_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `NrEp` | 8 | -127 | 127 |  |
| `fa_nose_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cKFK` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RoKL` | 8 | -127 | 127 |  |
| `fa_orbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `kfrV` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eeBj` | 8 | -127 | 127 |  |
| `fa_orbital_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `ztEx` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `cqNc` | 8 | -127 | 127 |  |
| `fa_orbital_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `BhQi` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hmvQ` | 8 | -127 | 127 |  |
| `fa_orbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `IhmO` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sggs` | 8 | -127 | 127 |  |
| `fa_orbital_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `vrFm` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QsMX` | 8 | -127 | 127 |  |
| `fa_orbital_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xflp` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BxbN` | 8 | -127 | 127 |  |
| `fa_periorbital_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `gaGT` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xvee` | 8 | -127 | 127 |  |
| `fa_periorbital_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `UcXA` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oACB` | 8 | -127 | 127 |  |
| `fa_preplatysmal_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YynO` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `acju` | 8 | -127 | 127 |  |
| `fa_submandibular_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `PvKQ` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `CaOF` | 8 | -127 | 127 |  |
| `fa_submandibular_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `zxLH` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `baRx` | 8 | -127 | 127 |  |
| `fa_submental_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `WxYj` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zcUe` | 8 | -127 | 127 |  |
| `fa_submental_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mvpA` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wiaj` | 8 | -127 | 127 |  |
| `fa_temporal_NL_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `rpTd` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `akro` | 8 | -127 | 127 |  |
| `fa_temporal_NR_XLX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `DnWW` | 8 | -127 | 127 |  |

## spa_flesh

Binary code: `WCGy`. Record type: `Fc27Record<'spa_flesh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60300 | 60499 | Yes |
| `fl_buccalRecess_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kYbS` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `xvSs` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gWWp` | 8 | -127 | 127 |  |
| `fl_buccalRecess_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `lxDX` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `XrGr` | 8 | -127 | 127 |  |
| `fl_buccomandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `gGRA` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qNwg` | 8 | -127 | 127 |  |
| `fl_chinCleft_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JzKe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Onuj` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qkLD` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JBbx` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sdEg` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Txci` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rKlS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `cHlY` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tHap` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oxbb` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QqCf` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TriV` | 8 | -127 | 127 |  |
| `fl_epicanthic_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Ojxc` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KpPQ` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `miuU` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VzGe` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `obFn` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fvZt` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DMkR` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YJob` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `FJrS` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Yvus` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `AsnM` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rtPm` | 8 | -127 | 127 |  |
| `fl_epicanthic_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ylwX` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NiUs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GzEy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lbbr` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YMaR` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bJaj` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WJlq` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `PsdU` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AtxW` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlin` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `aofQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KcHc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ttra` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ctoT` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HGtt` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `srNH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JPyO` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `geKs` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jzKy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ejVP` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `JNtH` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qwht` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `HUyc` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `edSy` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lwis` | 8 | -127 | 127 |  |
| `fl_eyelids_NL_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ggdl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lkRH` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `qBFl` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jdGA` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IKvK` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zHro` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GHoZ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bqYz` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wrwt` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `djPk` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Wmej` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Ntwn` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `FrmJ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `YrZY` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TIIi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `otgQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VRzB` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QgLb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HBHR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OlEI` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VLoQ` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `mugi` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TSfr` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ObnR` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Juzb` | 8 | -127 | 127 |  |
| `fl_eyelids_NR_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Qegq` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dsqi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FbTW` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `SuTc` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DeMl` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gygn` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EFdv` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nEtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CMSo` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MJsC` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oKpi` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TLhQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mveB` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rATP` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TPOX` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `YuCV` | 8 | -127 | 127 |  |
| `fl_lipLower_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VKJM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `JELU` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lTWQ` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yyya` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `jOhT` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `yeAM` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `uuYw` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SBls` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `RApy` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UIqr` | 8 | -127 | 127 |  |
| `fl_lipLower_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `DAET` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RqHB` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tdyF` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WwCv` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ICX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rgJe` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `kAhk` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IDgE` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bCsm` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GKnD` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QHtx` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sMsp` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HNgL` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qxzS` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `TyOI` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vRPc` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owHO` | 8 | -127 | 127 |  |
| `fl_lipLower_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xMYf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `GZWN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eSLt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pXHz` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gLEO` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sdvk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QeOA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jbWy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OnJj` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tTlp` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VEYV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yVwX` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TJPm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `tMxA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `RvkE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yKku` | 8 | -127 | 127 |  |
| `fl_lipUpper_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `PWbD` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PXdq` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `rIgK` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kZsg` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `tNnx` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_IMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `sQKk` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gVOS` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EOTm` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XTDE` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `CHcV` | 8 | -127 | 127 |  |
| `fl_lipUpper_NN_SMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pOOv` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qXTe` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OUKa` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NZKQ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_ILX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QNVJ` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `obKf` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `MgvH` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vdHt` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `KpEA` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FVkC` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hCdy` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uTxs` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `fHil` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FKwT` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `dxpn` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uMlN` | 8 | -127 | 127 |  |
| `fl_lipUpper_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `bYuw` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `SSKg` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uZTc` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `pIzO` | 8 | -127 | 127 |  |
| `fl_lip_NL_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `wIMf` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `fokd` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DXBJ` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Mapr` | 8 | -127 | 127 |  |
| `fl_lip_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Fyqa` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `maHG` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OZya` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JoCY` | 8 | -127 | 127 |  |
| `fl_lip_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QoJJ` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `qULv` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SXWH` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ZGyl` | 8 | -127 | 127 |  |
| `fl_lip_NR_XCX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `UGhc` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `PmBW` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `nZgO` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `kcYk` | 8 | -127 | 127 |  |
| `fl_lip_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `pAnt` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `wQsj` | 8 | -127 | 127 |  |
| `fl_mandibularGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `Hlfc` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pKxS` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `cJAM` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tMwZ` | 8 | -127 | 127 |  |
| `fl_nasojugalGroove_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `oHVH` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `jHWf` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NL_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KtmR` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_IXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `kaxs` | 8 | -127 | 127 |  |
| `fl_nasolabialGroove_NR_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `OrXi` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NL_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `grDZ` | 8 | -127 | 127 |  |
| `fl_orbitalGroove_NR_IXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Utmq` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NL_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `lura` | 8 | -127 | 127 |  |
| `fl_oromentalGroove_NR_XXX_L` | `number` | `DBOFIELDTYPE_INTEGER` | `ObgR` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `lSQl` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NFVZ` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `OEFb` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `Lgai` | 8 | -127 | 127 |  |
| `fl_philtrum_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ppsx` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YWth` | 8 | -127 | 127 |  |
| `mu_corrugator_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `dBkf` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oYIa` | 8 | -127 | 127 |  |
| `mu_corrugator_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Bzpk` | 8 | -127 | 127 |  |
| `mu_masseter_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `hdwH` | 8 | -127 | 127 |  |
| `mu_masseter_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `RbxA` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `tzLq` | 8 | -127 | 127 |  |
| `mu_platysma_NL_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WAPr` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `TvgN` | 8 | -127 | 127 |  |
| `mu_platysma_NL_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JqgT` | 8 | -127 | 127 |  |
| `mu_platysma_NN_IMX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `WgVa` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LpLK` | 8 | -127 | 127 |  |
| `mu_platysma_NN_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wELo` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `eOIB` | 8 | -127 | 127 |  |
| `mu_platysma_NR_ILX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `GySA` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_D` | `number` | `DBOFIELDTYPE_INTEGER` | `UmXS` | 8 | -127 | 127 |  |
| `mu_platysma_NR_SLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VshY` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NepN` | 8 | -127 | 127 |  |
| `mu_procerus_NN_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `spIT` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `edce` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `JnqH` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `Obxp` | 8 | -127 | 127 |  |
| `mu_sternomastoid_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lpHs` | 8 | -127 | 127 |  |
| `mu_temporalis_NL_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `KOiu` | 8 | -127 | 127 |  |
| `mu_temporalis_NR_XXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `mQjF` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VCwY` | 8 | -127 | 127 |  |
| `mu_trapezius_NN_SXX_L_M` | `number` | `DBOFIELDTYPE_INTEGER` | `YRVG` | 8 | -127 | 127 |  |

## spa_skeletal

Binary code: `rKry`. Record type: `Fc27Record<'spa_skeletal', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60300 | 60499 | Yes |
| `bs_brow_NL_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `gyhp` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `IxcV` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `LQsX` | 8 | -127 | 127 |  |
| `bs_brow_NL_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `GMTm` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `dlKC` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Byzi` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ijTQ` | 8 | -127 | 127 |  |
| `bs_brow_NL_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `zXsB` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `Mjpl` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oosF` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgv` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mZze` | 8 | -127 | 127 |  |
| `bs_brow_NN_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kIJI` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QAgC` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `svhy` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jOts` | 8 | -127 | 127 |  |
| `bs_brow_NR_SMX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qKml` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `pjHx` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NAyp` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `elWL` | 8 | -127 | 127 |  |
| `bs_brow_NR_XLX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `LZJS` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DANs` | 8 | -127 | 127 |  |
| `bs_canine_NL_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `dZsT` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `SxyW` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gwGC` | 8 | -127 | 127 |  |
| `bs_canine_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `JSGL` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Hywb` | 8 | -127 | 127 |  |
| `bs_canine_NR_IXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `mELI` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uvzt` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `rhxN` | 8 | -127 | 127 |  |
| `bs_canine_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `puFm` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ttTo` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `VmqU` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `yDKW` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `TfBn` | 8 | -127 | 127 |  |
| `bs_chin_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NmkB` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `rmrK` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `TlqW` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AAeU` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `VcBN` | 8 | -127 | 127 |  |
| `bs_chin_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `nHCQ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RwWh` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `tzHZ` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `Wevb` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `VjIH` | 8 | -127 | 127 |  |
| `bs_coronal_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `pasi` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ISMJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `nZSF` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `kwda` | 8 | -127 | 127 |  |
| `bs_cuspid_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FUvJ` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EUNK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `gsVK` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MUiD` | 8 | -127 | 127 |  |
| `bs_cuspid_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `uFcS` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hRJh` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WfYn` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DbHe` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LNAj` | 8 | -127 | 127 |  |
| `bs_forehead_NN_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Sgva` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vsMU` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oIHR` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `eCuI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `hOYI` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wHnE` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `yClV` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `BAYu` | 8 | -127 | 127 |  |
| `bs_incisorLower_NL_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `kbEt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jqNz` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_SMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `EGqK` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `pnJT` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Rmnt` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XLX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DagL` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_N` | `number` | `DBOFIELDTYPE_INTEGER` | `BvSe` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `xcnj` | 8 | -127 | 127 |  |
| `bs_incisorLower_NR_XMX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jePy` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `lpDq` | 8 | -127 | 127 |  |
| `bs_incisor_NL_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `AlDl` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `KFAz` | 8 | -127 | 127 |  |
| `bs_incisor_NL_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `gBsI` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `UAQc` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DlIO` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WDse` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `bAvZ` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gVHb` | 8 | -127 | 127 |  |
| `bs_incisor_NL_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `mBsk` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `NnSJ` | 8 | -127 | 127 |  |
| `bs_incisor_NR_ILX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `ToQu` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `ODBI` | 8 | -127 | 127 |  |
| `bs_incisor_NR_IMX_R` | `number` | `DBOFIELDTYPE_INTEGER` | `TUbT` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YyRH` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rjFl` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XLX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `WbTL` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `DyKS` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `wTag` | 8 | -127 | 127 |  |
| `bs_incisor_NR_XMX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `GdTd` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `AqnP` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `YxuT` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `rcWh` | 8 | -127 | 127 |  |
| `bs_mandible_NL_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `WgpQ` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `jgAr` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LvJv` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `EuNF` | 8 | -127 | 127 |  |
| `bs_mandible_NL_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `NSyo` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EDav` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gUHn` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `vRvN` | 8 | -127 | 127 |  |
| `bs_mandible_NL_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `etQU` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `wsiA` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uvvo` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DabK` | 8 | -127 | 127 |  |
| `bs_mandible_NR_IXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SeET` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `HeBY` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `jxMM` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `owMm` | 8 | -127 | 127 |  |
| `bs_mandible_NR_SXA_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `lUTv` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sFHE` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `USWk` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `zPOO` | 8 | -127 | 127 |  |
| `bs_mandible_NR_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SrRz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eJgL` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GChb` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NHpZ` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `ITWI` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `VLPj` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `twOz` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `aNCB` | 8 | -127 | 127 |  |
| `bs_maxilla_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `rZJk` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OHdE` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qEgg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lJsS` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_IXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sVnb` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `hNOg` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `FuTI` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `WLDq` | 8 | -127 | 127 |  |
| `bs_maxilla_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `DXcz` | 8 | -127 | 127 |  |
| `bs_molarsLower_NL_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gApb` | 8 | -127 | 127 |  |
| `bs_molarsLower_NR_XXX_U` | `number` | `DBOFIELDTYPE_INTEGER` | `LtOQ` | 8 | -127 | 127 |  |
| `bs_molars_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `BEEl` | 8 | -127 | 127 |  |
| `bs_molars_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `xCpm` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UPgw` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wgho` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `bhpK` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `udWT` | 8 | -127 | 127 |  |
| `bs_noseBridge_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `NCpf` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MWud` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `odLJ` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DYbj` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mkEy` | 8 | -127 | 127 |  |
| `bs_noseRoot_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `LOxY` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FvPU` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `hsOk` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `utCO` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `flJz` | 8 | -127 | 127 |  |
| `bs_nose_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `MZgn` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `mOwd` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `OVNN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `JEdf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `QECu` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `oVwX` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `QWlf` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HHlN` | 8 | -127 | 127 |  |
| `bs_orbits_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `OHaE` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `CQRe` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `eTwC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lCIo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `gCDh` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `ETxU` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `gYoo` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jJkC` | 8 | -127 | 127 |  |
| `bs_orbits_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `eJvT` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sggx` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_F` | `number` | `DBOFIELDTYPE_INTEGER` | `EHLm` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `jBsD` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qlnK` | 8 | -127 | 127 |  |
| `bs_skull_NN_SXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `jGMw` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `KQKu` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `mfzm` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `VeTM` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `oasV` | 8 | -127 | 127 |  |
| `bs_skull_NN_XXP_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `KEQi` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `HEPf` | 8 | -127 | 127 |  |
| `bs_teethLower_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `AFHV` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wBbw` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXA_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `DAbu` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `RiTf` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `pBKD` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `ikKp` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `nYVg` | 8 | -127 | 127 |  |
| `bs_teeth_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Ndaa` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `MBON` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `oCrd` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `TDvX` | 8 | -127 | 127 |  |
| `bs_temple_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `mLkG` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `QzjC` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `sEae` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `HFaU` | 8 | -127 | 127 |  |
| `bs_temple_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `qNld` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `XxGk` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `vyDA` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `gzPy` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `xHwj` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `bvDf` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `zACH` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `UBSt` | 8 | -127 | 127 |  |
| `bs_zygomaxilla_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `BJNA` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `aBDd` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `yuaN` | 8 | -127 | 127 |  |
| `ca_adamsapple_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `ISAz` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `sOWG` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `Uhna` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `XMzY` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `SEgJ` | 8 | -127 | 127 |  |
| `ca_ears_NL_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `QzdI` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `UQnt` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `wfSx` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `nKiD` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `uCdK` | 8 | -127 | 127 |  |
| `ca_ears_NR_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `gXil` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `FpxO` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `diom` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `uzQE` | 8 | -127 | 127 |  |
| `ca_laryngeal_NN_XXX_SL_SR` | `number` | `DBOFIELDTYPE_INTEGER` | `Iuns` | 8 | -127 | 127 |  |
| `fc_mouthbag_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fsTu` | 7 | 0 | 127 |  |
| `fc_neck_restore` | `number` | `DBOFIELDTYPE_INTEGER` | `fmyQ` | 7 | 0 | 127 |  |
| `fl_eyes_NL_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `OFin` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `qyzv` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `lTnx` | 8 | -127 | 127 |  |
| `fl_eyes_NL_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `sPso` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_B_F` | `number` | `DBOFIELDTYPE_INTEGER` | `eDzk` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_D_U` | `number` | `DBOFIELDTYPE_INTEGER` | `GAeE` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_N_W` | `number` | `DBOFIELDTYPE_INTEGER` | `NVWm` | 8 | -127 | 127 |  |
| `fl_eyes_NR_XXX_R_A` | `number` | `DBOFIELDTYPE_INTEGER` | `IRpD` | 8 | -127 | 127 |  |

## spa_skins

Binary code: `bOKd`. Record type: `Fc27Record<'spa_skins', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 8 | 60300 | 60499 | Yes |
| `secformvar0` | `number` | `DBOFIELDTYPE_INTEGER` | `SmRQ` | 5 | 0 | 16 |  |
| `secformvar1` | `number` | `DBOFIELDTYPE_INTEGER` | `JtBC` | 5 | 0 | 16 |  |
| `secformvar10` | `number` | `DBOFIELDTYPE_INTEGER` | `oVgJ` | 5 | 0 | 16 |  |
| `secformvar11` | `number` | `DBOFIELDTYPE_INTEGER` | `bWcD` | 5 | 0 | 16 |  |
| `secformvar12` | `number` | `DBOFIELDTYPE_INTEGER` | `WfZl` | 5 | 0 | 16 |  |
| `secformvar13` | `number` | `DBOFIELDTYPE_INTEGER` | `FcJX` | 5 | 0 | 16 |  |
| `secformvar14` | `number` | `DBOFIELDTYPE_INTEGER` | `joMQ` | 5 | 0 | 16 |  |
| `secformvar15` | `number` | `DBOFIELDTYPE_INTEGER` | `gjIe` | 5 | 0 | 16 |  |
| `secformvar16` | `number` | `DBOFIELDTYPE_INTEGER` | `dahI` | 5 | 0 | 16 |  |
| `secformvar17` | `number` | `DBOFIELDTYPE_INTEGER` | `yhRO` | 5 | 0 | 16 |  |
| `secformvar18` | `number` | `DBOFIELDTYPE_INTEGER` | `qCMD` | 5 | 0 | 16 |  |
| `secformvar19` | `number` | `DBOFIELDTYPE_INTEGER` | `pJIV` | 5 | 0 | 16 |  |
| `secformvar2` | `number` | `DBOFIELDTYPE_INTEGER` | `MAwA` | 5 | 0 | 16 |  |
| `secformvar20` | `number` | `DBOFIELDTYPE_INTEGER` | `PAHu` | 5 | 0 | 16 |  |
| `secformvar21` | `number` | `DBOFIELDTYPE_INTEGER` | `QvXo` | 5 | 0 | 16 |  |
| `secformvar22` | `number` | `DBOFIELDTYPE_INTEGER` | `xmaW` | 5 | 0 | 16 |  |
| `secformvar23` | `number` | `DBOFIELDTYPE_INTEGER` | `OteI` | 5 | 0 | 16 |  |
| `secformvar24` | `number` | `DBOFIELDTYPE_INTEGER` | `MJPD` | 5 | 0 | 16 |  |
| `secformvar25` | `number` | `DBOFIELDTYPE_INTEGER` | `TKfR` | 5 | 0 | 16 |  |
| `secformvar26` | `number` | `DBOFIELDTYPE_INTEGER` | `yTGv` | 5 | 0 | 16 |  |
| `secformvar27` | `number` | `DBOFIELDTYPE_INTEGER` | `NQKB` | 5 | 0 | 16 |  |
| `secformvar3` | `number` | `DBOFIELDTYPE_INTEGER` | `Dvsu` | 5 | 0 | 16 |  |
| `secformvar4` | `number` | `DBOFIELDTYPE_INTEGER` | `ZTFp` | 5 | 0 | 16 |  |
| `secformvar5` | `number` | `DBOFIELDTYPE_INTEGER` | `CQpv` | 5 | 0 | 16 |  |
| `secformvar6` | `number` | `DBOFIELDTYPE_INTEGER` | `HJMJ` | 5 | 0 | 16 |  |
| `secformvar7` | `number` | `DBOFIELDTYPE_INTEGER` | `IKIX` | 5 | 0 | 16 |  |
| `secformvar8` | `number` | `DBOFIELDTYPE_INTEGER` | `QZhK` | 5 | 0 | 16 |  |
| `secformvar9` | `number` | `DBOFIELDTYPE_INTEGER` | `vaRU` | 5 | 0 | 16 |  |
| `secformweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `Gdkj` | 7 | 0 | 100 |  |
| `secformweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `JeAZ` | 7 | 0 | 100 |  |
| `secformweight10` | `number` | `DBOFIELDTYPE_INTEGER` | `gqDW` | 7 | 0 | 100 |  |
| `secformweight11` | `number` | `DBOFIELDTYPE_INTEGER` | `fpTo` | 7 | 0 | 100 |  |
| `secformweight12` | `number` | `DBOFIELDTYPE_INTEGER` | `ywuy` | 7 | 0 | 100 |  |
| `secformweight13` | `number` | `DBOFIELDTYPE_INTEGER` | `hzyI` | 7 | 0 | 100 |  |
| `secformweight14` | `number` | `DBOFIELDTYPE_INTEGER` | `jPjz` | 7 | 0 | 100 |  |
| `secformweight15` | `number` | `DBOFIELDTYPE_INTEGER` | `cUzx` | 7 | 0 | 100 |  |
| `secformweight16` | `number` | `DBOFIELDTYPE_INTEGER` | `xNCr` | 7 | 0 | 100 |  |
| `secformweight17` | `number` | `DBOFIELDTYPE_INTEGER` | `iGGh` | 7 | 0 | 100 |  |
| `secformweight18` | `number` | `DBOFIELDTYPE_INTEGER` | `qdTo` | 7 | 0 | 100 |  |
| `secformweight19` | `number` | `DBOFIELDTYPE_INTEGER` | `lWji` | 7 | 0 | 100 |  |
| `secformweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `EXFH` | 7 | 0 | 100 |  |
| `secformweight20` | `number` | `DBOFIELDTYPE_INTEGER` | `HbAN` | 7 | 0 | 100 |  |
| `secformweight21` | `number` | `DBOFIELDTYPE_INTEGER` | `UgwX` | 7 | 0 | 100 |  |
| `secformweight22` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZVp` | 7 | 0 | 100 |  |
| `secformweight23` | `number` | `DBOFIELDTYPE_INTEGER` | `qSFr` | 7 | 0 | 100 |  |
| `secformweight24` | `number` | `DBOFIELDTYPE_INTEGER` | `MeIo` | 7 | 0 | 100 |  |
| `secformweight25` | `number` | `DBOFIELDTYPE_INTEGER` | `PdEe` | 7 | 0 | 100 |  |
| `secformweight26` | `number` | `DBOFIELDTYPE_INTEGER` | `SkBg` | 7 | 0 | 100 |  |
| `secformweight27` | `number` | `DBOFIELDTYPE_INTEGER` | `xnlO` | 7 | 0 | 100 |  |
| `secformweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `XUJF` | 7 | 0 | 100 |  |
| `secformweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `FgEG` | 7 | 0 | 100 |  |
| `secformweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `KbUQ` | 7 | 0 | 100 |  |
| `secformweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `HixO` | 7 | 0 | 100 |  |
| `secformweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `UpBg` | 7 | 0 | 100 |  |
| `secformweight8` | `number` | `DBOFIELDTYPE_INTEGER` | `MuEV` | 7 | 0 | 100 |  |
| `secformweight9` | `number` | `DBOFIELDTYPE_INTEGER` | `TBUb` | 7 | 0 | 100 |  |
| `skinsurfacepack0` | `number` | `DBOFIELDTYPE_INTEGER` | `lVQb` | 18 | 100000 | 299999 |  |
| `skinsurfacepack1` | `number` | `DBOFIELDTYPE_INTEGER` | `aWgh` | 18 | 100000 | 299999 |  |
| `skinsurfacepack2` | `number` | `DBOFIELDTYPE_INTEGER` | `vfJz` | 18 | 100000 | 299999 |  |
| `skinsurfacepack3` | `number` | `DBOFIELDTYPE_INTEGER` | `kcNN` | 18 | 100000 | 299999 |  |
| `skinsurfacepack4` | `number` | `DBOFIELDTYPE_INTEGER` | `eoIS` | 18 | 100000 | 299999 |  |
| `skinsurfacepack5` | `number` | `DBOFIELDTYPE_INTEGER` | `hjYE` | 18 | 100000 | 299999 |  |
| `skinsurfacepack6` | `number` | `DBOFIELDTYPE_INTEGER` | `Aada` | 18 | 100000 | 299999 |  |
| `skinsurfacepack7` | `number` | `DBOFIELDTYPE_INTEGER` | `fhhU` | 18 | 100000 | 299999 |  |
| `skinsurfacepackweight0` | `number` | `DBOFIELDTYPE_INTEGER` | `gLVI` | 7 | 0 | 100 |  |
| `skinsurfacepackweight1` | `number` | `DBOFIELDTYPE_INTEGER` | `zIFO` | 7 | 0 | 100 |  |
| `skinsurfacepackweight2` | `number` | `DBOFIELDTYPE_INTEGER` | `eRAQ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight3` | `number` | `DBOFIELDTYPE_INTEGER` | `hSwe` | 7 | 0 | 100 |  |
| `skinsurfacepackweight4` | `number` | `DBOFIELDTYPE_INTEGER` | `juBl` | 7 | 0 | 100 |  |
| `skinsurfacepackweight5` | `number` | `DBOFIELDTYPE_INTEGER` | `wBlX` | 7 | 0 | 100 |  |
| `skinsurfacepackweight6` | `number` | `DBOFIELDTYPE_INTEGER` | `dsIJ` | 7 | 0 | 100 |  |
| `skinsurfacepackweight7` | `number` | `DBOFIELDTYPE_INTEGER` | `inED` | 7 | 0 | 100 |  |

## specialization_attr_strengths

Binary code: `pBeE`. Record type: `Fc27Record<'specialization_attr_strengths', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attributeid` | `number` | `DBOFIELDTYPE_INTEGER` | `cmrv` | 8 | 0 | 255 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 13 | 0 | 5000 | Yes |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |
| `value` | `number` | `DBOFIELDTYPE_INTEGER` | `SbfX` | 8 | 0 | 255 |  |

## specialization_map

Binary code: `FAwA`. Record type: `Fc27Record<'specialization_map', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `archetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `EfQj` | 8 | 0 | 255 |  |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |

## specialization_perks

Binary code: `jiRJ`. Record type: `Fc27Record<'specialization_perks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `level` | `number` | `DBOFIELDTYPE_INTEGER` | `paPI` | 8 | 0 | 255 |  |
| `perkid` | `number` | `DBOFIELDTYPE_INTEGER` | `bOld` | 8 | 0 | 255 |  |
| `specid` | `number` | `DBOFIELDTYPE_INTEGER` | `ivRL` | 8 | 0 | 255 |  |
| `specperkid` | `number` | `DBOFIELDTYPE_INTEGER` | `vxeF` | 13 | 0 | 5000 | Yes |

## sponsors

Binary code: `fGwQ`. Record type: `Fc27Record<'sponsors', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adsponserid` | `number` | `DBOFIELDTYPE_INTEGER` | `Laxd` | 13 | 0 | 8191 | Yes |
| `basecolour` | `string` | `DBOFIELDTYPE_STRING` | `LUfT` | 64 | 0 | 0 |  |
| `isea` | `number` | `DBOFIELDTYPE_INTEGER` | `eZzy` | 1 | 0 | 1 |  |
| `isfut` | `number` | `DBOFIELDTYPE_INTEGER` | `FEJQ` | 1 | 0 | 1 |  |
| `length` | `number` | `DBOFIELDTYPE_INTEGER` | `mtOV` | 14 | 0 | 10000 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 256 | 0 | 0 |  |

## ssfformations

Binary code: `bnGP`. Record type: `Fc27Record<'ssfformations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `att` | `number` | `DBOFIELDTYPE_INTEGER` | `NHAw` | 3 | 0 | 5 |  |
| `def` | `number` | `DBOFIELDTYPE_INTEGER` | `XIsP` | 3 | 0 | 5 |  |
| `formationid` | `number` | `DBOFIELDTYPE_INTEGER` | `oHkj` | 5 | 0 | 20 | Yes |
| `gk` | `number` | `DBOFIELDTYPE_INTEGER` | `Qcnk` | 3 | 0 | 5 |  |
| `mid` | `number` | `DBOFIELDTYPE_INTEGER` | `OuhI` | 3 | 0 | 5 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `pitchposition0` | `number` | `DBOFIELDTYPE_INTEGER` | `tOMa` | 5 | -1 | 27 |  |
| `pitchposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `mVQU` | 5 | -1 | 27 |  |
| `pitchposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `TMVS` | 5 | -1 | 27 |  |
| `pitchposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `sHlE` | 5 | -1 | 27 |  |
| `pitchposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `urYz` | 5 | -1 | 27 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 5 | -1 | 15 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 5 | -1 | 15 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 5 | -1 | 15 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 5 | -1 | 15 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 5 | -1 | 15 |  |
| `squadtype` | `number` | `DBOFIELDTYPE_INTEGER` | `DQkg` | 4 | 0 | 10 |  |

## ssfstadiummusic

Binary code: `eJNd`. Record type: `Fc27Record<'ssfstadiummusic', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `disabledsongs` | `string` | `DBOFIELDTYPE_STRING` | `RCVI` | 504 | 0 | 0 |  |
| `firsttimeunlockedsongs` | `string` | `DBOFIELDTYPE_STRING` | `InYP` | 504 | 0 | 0 |  |
| `keymatchsongs` | `string` | `DBOFIELDTYPE_STRING` | `dOiI` | 504 | 0 | 0 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 13 | 0 | 6000 | Yes |

## ssfstadiums

Binary code: `mfOS`. Record type: `Fc27Record<'ssfstadiums', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `availablesquads` | `number` | `DBOFIELDTYPE_INTEGER` | `WMou` | 10 | 0 | 1023 |  |
| `defaultwallvalue` | `number` | `DBOFIELDTYPE_INTEGER` | `csPp` | 1 | 0 | 1 |  |
| `iswalleditable` | `number` | `DBOFIELDTYPE_INTEGER` | `EZzZ` | 1 | 0 | 1 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 2040 | 0 | 0 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 10 | 1000 | 2000 | Yes |

## stadiumassignments

Binary code: `esAj`. Record type: `Fc27Record<'stadiumassignments', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `stadiumcustomname` | `string` | `DBOFIELDTYPE_STRING` | `RiGc` | 416 | 0 | 0 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | 0 | 200000 | Yes |

## stadiumcolor

Binary code: `cPVF`. Record type: `Fc27Record<'stadiumcolor', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `colorvalue1` | `string` | `DBOFIELDTYPE_STRING` | `JfHi` | 520 | 0 | 0 |  |
| `colorvalue2` | `string` | `DBOFIELDTYPE_STRING` | `MmeU` | 520 | 0 | 0 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |
| `type` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpXz` | 10 | 0 | 1000 |  |

## stadiums

Binary code: `QYeR`. Record type: `Fc27Record<'stadiums', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adboardendlinedistance` | `number` | `DBOFIELDTYPE_INTEGER` | `QVNn` | 20 | 0 | 999999 |  |
| `adboardsidelinedistance` | `number` | `DBOFIELDTYPE_INTEGER` | `suHA` | 20 | 0 | 999999 |  |
| `adboardtype` | `number` | `DBOFIELDTYPE_INTEGER` | `vigm` | 2 | 0 | 3 |  |
| `cameraheight` | `number` | `DBOFIELDTYPE_INTEGER` | `EkSR` | 5 | 0 | 31 |  |
| `camerazoom` | `number` | `DBOFIELDTYPE_INTEGER` | `aqzm` | 4 | 0 | 15 |  |
| `capacity` | `number` | `DBOFIELDTYPE_INTEGER` | `wPID` | 18 | 0 | 200000 |  |
| `cityid` | `number` | `DBOFIELDTYPE_INTEGER` | `pNIL` | 10 | 0 | 1023 |  |
| `colorregion` | `number` | `DBOFIELDTYPE_INTEGER` | `sseO` | 5 | 0 | 31 |  |
| `countrycode` | `number` | `DBOFIELDTYPE_INTEGER` | `xciN` | 12 | 0 | 3000 |  |
| `defaultseason` | `number` | `DBOFIELDTYPE_INTEGER` | `EMlO` | 2 | 0 | 3 |  |
| `defaulttime` | `number` | `DBOFIELDTYPE_INTEGER` | `ACbU` | 11 | 1000 | 2345 |  |
| `defaultweather` | `number` | `DBOFIELDTYPE_INTEGER` | `aHiq` | 4 | 0 | 8 |  |
| `dlc` | `number` | `DBOFIELDTYPE_INTEGER` | `OIbl` | 1 | 0 | 1 |  |
| `dronetype` | `number` | `DBOFIELDTYPE_INTEGER` | `yisC` | 1 | 0 | 1 |  |
| `enhancedcrowdcardsupport` | `number` | `DBOFIELDTYPE_INTEGER` | `qBjz` | 1 | 0 | 1 |  |
| `frontsettype` | `number` | `DBOFIELDTYPE_INTEGER` | `ybdo` | 2 | 0 | 2 |  |
| `genericrank` | `number` | `DBOFIELDTYPE_INTEGER` | `CRNs` | 4 | -1 | 10 |  |
| `gmavailability` | `number` | `DBOFIELDTYPE_INTEGER` | `pDzK` | 2 | 0 | 3 |  |
| `goalnetads` | `number` | `DBOFIELDTYPE_INTEGER` | `Daqz` | 1 | 0 | 1 |  |
| `goalnetstanchioncolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `Tnbc` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `PNLv` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `WELo` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `gCAn` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `oEoM` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `BZQX` | 8 | 0 | 255 |  |
| `goalnetstanchiontype` | `number` | `DBOFIELDTYPE_INTEGER` | `mZqA` | 2 | 0 | 3 |  |
| `hascenteradboard` | `number` | `DBOFIELDTYPE_INTEGER` | `ncSU` | 1 | 0 | 1 |  |
| `hasdroneshots` | `number` | `DBOFIELDTYPE_INTEGER` | `pbEQ` | 1 | 0 | 1 |  |
| `hasintrovideo` | `number` | `DBOFIELDTYPE_INTEGER` | `pkiz` | 1 | 0 | 1 |  |
| `hasmexicanwave` | `number` | `DBOFIELDTYPE_INTEGER` | `KOqT` | 1 | 0 | 1 |  |
| `hasunofficialname` | `number` | `DBOFIELDTYPE_INTEGER` | `FKxG` | 1 | 0 | 1 |  |
| `hometeamid` | `number` | `DBOFIELDTYPE_INTEGER` | `KbVA` | 18 | -1 | 200000 |  |
| `inflatables` | `number` | `DBOFIELDTYPE_INTEGER` | `jXld` | 13 | 0 | 8191 |  |
| `isdynamic` | `number` | `DBOFIELDTYPE_INTEGER` | `mAcn` | 1 | 0 | 1 |  |
| `iseditable` | `number` | `DBOFIELDTYPE_INTEGER` | `xnTn` | 1 | 0 | 1 |  |
| `islicensed` | `number` | `DBOFIELDTYPE_INTEGER` | `oyWe` | 1 | 0 | 1 |  |
| `ismirrored` | `number` | `DBOFIELDTYPE_INTEGER` | `zEpW` | 1 | 0 | 1 |  |
| `issmallsided` | `number` | `DBOFIELDTYPE_INTEGER` | `jDnB` | 1 | 0 | 1 |  |
| `isstadiumavailable` | `number` | `DBOFIELDTYPE_INTEGER` | `hgbU` | 1 | 0 | 1 |  |
| `languageregion` | `number` | `DBOFIELDTYPE_INTEGER` | `KPAn` | 5 | 0 | 25 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 2040 | 0 | 0 |  |
| `pitchcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `lzGH` | 4 | 0 | 10 |  |
| `pitchlinecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `IOSv` | 4 | 0 | 10 |  |
| `pitchtarps` | `number` | `DBOFIELDTYPE_INTEGER` | `rtiM` | 2 | 0 | 2 |  |
| `pitchwear` | `number` | `DBOFIELDTYPE_INTEGER` | `kjiI` | 4 | 0 | 10 |  |
| `playsurfacetype` | `number` | `DBOFIELDTYPE_INTEGER` | `vFwL` | 3 | 0 | 7 |  |
| `policetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `RcKH` | 4 | 0 | 15 |  |
| `presassetfour` | `number` | `DBOFIELDTYPE_INTEGER` | `fbXA` | 1 | 0 | 1 |  |
| `presassetone` | `number` | `DBOFIELDTYPE_INTEGER` | `TdUB` | 1 | 0 | 1 |  |
| `presassetthree` | `number` | `DBOFIELDTYPE_INTEGER` | `qaQn` | 2 | 0 | 2 |  |
| `replay360degree` | `number` | `DBOFIELDTYPE_INTEGER` | `JVFc` | 1 | 0 | 1 |  |
| `rotation360degree` | `number` | `DBOFIELDTYPE_INTEGER` | `zivm` | 9 | 0 | 360 |  |
| `seatcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `irOE` | 3 | 1 | 8 |  |
| `sectionfacedbydefault` | `number` | `DBOFIELDTYPE_INTEGER` | `rKAG` | 1 | 0 | 1 |  |
| `stadawaytechzonemaxx` | `number` | `DBOFIELDTYPE_INTEGER` | `LAvI` | 17 | -65536 | 65535 |  |
| `stadawaytechzonemaxz` | `number` | `DBOFIELDTYPE_INTEGER` | `VCOk` | 17 | -65536 | 65535 |  |
| `stadawaytechzoneminx` | `number` | `DBOFIELDTYPE_INTEGER` | `djrv` | 17 | -65536 | 65535 |  |
| `stadawaytechzoneminz` | `number` | `DBOFIELDTYPE_INTEGER` | `jZWT` | 17 | -65536 | 65535 |  |
| `stadhometechzonemaxx` | `number` | `DBOFIELDTYPE_INTEGER` | `pgYO` | 17 | -65536 | 65535 |  |
| `stadhometechzonemaxz` | `number` | `DBOFIELDTYPE_INTEGER` | `XSRG` | 17 | -65536 | 65535 |  |
| `stadhometechzoneminx` | `number` | `DBOFIELDTYPE_INTEGER` | `XvwV` | 17 | -65536 | 65535 |  |
| `stadhometechzoneminz` | `number` | `DBOFIELDTYPE_INTEGER` | `JBFd` | 17 | -65536 | 65535 |  |
| `stadiumgloalnetdepth` | `number` | `DBOFIELDTYPE_INTEGER` | `zdSA` | 20 | 0 | 999999 |  |
| `stadiumgoalnetpattern` | `number` | `DBOFIELDTYPE_INTEGER` | `LOZj` | 1 | 0 | 1 |  |
| `stadiumgoalnetstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `CauK` | 6 | 0 | 63 |  |
| `stadiumgoalnettension` | `number` | `DBOFIELDTYPE_INTEGER` | `FJpk` | 2 | 0 | 2 |  |
| `stadiumgoalnettype` | `number` | `DBOFIELDTYPE_INTEGER` | `yCSY` | 2 | 0 | 3 |  |
| `stadiumgoalpoststyle` | `number` | `DBOFIELDTYPE_INTEGER` | `AZgS` | 3 | 0 | 7 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 11 | -1 | 2000 | Yes |
| `stadiummowpattern_code` | `number` | `DBOFIELDTYPE_INTEGER` | `dUTO` | 5 | 0 | 17 |  |
| `stadiumpitchlength` | `number` | `DBOFIELDTYPE_INTEGER` | `pIMJ` | 20 | 0 | 999999 |  |
| `stadiumpitchwidth` | `number` | `DBOFIELDTYPE_INTEGER` | `aHmb` | 20 | 0 | 999999 |  |
| `stadiumtype` | `number` | `DBOFIELDTYPE_INTEGER` | `BHwd` | 2 | 0 | 3 |  |
| `supportsgoalnetshape` | `number` | `DBOFIELDTYPE_INTEGER` | `bAYC` | 1 | 0 | 1 |  |
| `supportsunlicensedbanners` | `number` | `DBOFIELDTYPE_INTEGER` | `wgSu` | 1 | 0 | 1 |  |
| `supportsunlicensedtifos` | `number` | `DBOFIELDTYPE_INTEGER` | `aHQv` | 1 | 0 | 1 |  |
| `tifo` | `number` | `DBOFIELDTYPE_INTEGER` | `tWYe` | 1 | 0 | 1 |  |
| `timeofday1` | `number` | `DBOFIELDTYPE_INTEGER` | `Rlvs` | 3 | 0 | 5 |  |
| `timeofday2` | `number` | `DBOFIELDTYPE_INTEGER` | `wcyu` | 3 | 0 | 5 |  |
| `timeofday3` | `number` | `DBOFIELDTYPE_INTEGER` | `PXCA` | 3 | 0 | 5 |  |
| `timeofday4` | `number` | `DBOFIELDTYPE_INTEGER` | `NHrH` | 3 | 0 | 5 |  |
| `tod1weather` | `number` | `DBOFIELDTYPE_INTEGER` | `smVl` | 2 | 0 | 3 |  |
| `tod2weather` | `number` | `DBOFIELDTYPE_INTEGER` | `KZWm` | 2 | 0 | 3 |  |
| `tod3weather` | `number` | `DBOFIELDTYPE_INTEGER` | `eXWo` | 2 | 0 | 3 |  |
| `tod4weather` | `number` | `DBOFIELDTYPE_INTEGER` | `YefN` | 2 | 0 | 3 |  |
| `tunnellocation` | `number` | `DBOFIELDTYPE_INTEGER` | `UeSQ` | 2 | 0 | 2 |  |
| `upgradestyle` | `number` | `DBOFIELDTYPE_INTEGER` | `KHaq` | 3 | 0 | 5 |  |
| `upgradetier` | `number` | `DBOFIELDTYPE_INTEGER` | `SuPN` | 4 | 0 | 8 |  |

## starratingboundaries

Binary code: `AThf`. Record type: `Fc27Record<'starratingboundaries', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `starratingfrom` | `number` | `DBOFIELDTYPE_INTEGER` | `CGmr` | 7 | 0 | 99 | Yes |
| `starratingto` | `number` | `DBOFIELDTYPE_INTEGER` | `tpnz` | 7 | 0 | 99 |  |
| `stars` | `number \| null` | `DBOFIELDTYPE_REAL` | `WdLz` | 32 | 0 | 0 |  |

## stories

Binary code: `kgGh`. Record type: `Fc27Record<'stories', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `audioid` | `number` | `DBOFIELDTYPE_INTEGER` | `oazN` | 26 | 0 | 67000000 |  |
| `chance` | `number` | `DBOFIELDTYPE_INTEGER` | `XbPb` | 7 | 10 | 100 |  |
| `entity_id` | `number` | `DBOFIELDTYPE_INTEGER` | `BhXS` | 20 | 0 | 1000000 |  |
| `entity_type` | `number` | `DBOFIELDTYPE_INTEGER` | `tJsc` | 3 | 0 | 7 |  |
| `priority` | `number` | `DBOFIELDTYPE_INTEGER` | `LBdc` | 15 | -1 | 32000 |  |
| `storyid` | `number` | `DBOFIELDTYPE_INTEGER` | `nsfy` | 14 | 0 | 16000 | Yes |
| `target_fixture` | `number` | `DBOFIELDTYPE_INTEGER` | `naWP` | 16 | 0 | 64000 |  |

## tattoo

Binary code: `yeQw`. Record type: `Fc27Record<'tattoo', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `metaarea` | `number` | `DBOFIELDTYPE_INTEGER` | `UUDg` | 7 | 0 | 100 |  |
| `metalocation` | `number` | `DBOFIELDTYPE_INTEGER` | `LwOR` | 7 | 0 | 100 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 1 | 0 | 1 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 1 | 0 | 1 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 1 | 0 | 1 |  |
| `tattooid` | `number` | `DBOFIELDTYPE_INTEGER` | `zNFu` | 11 | 0 | 2000 | Yes |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 1 | 0 | 1 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 1 | 0 | 1 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 1 | 0 | 1 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 1 | 0 | 1 |  |

## teamballremapping

Binary code: `qsWt`. Record type: `Fc27Record<'teamballremapping', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 | Yes |
| `ballremapid` | `number` | `DBOFIELDTYPE_INTEGER` | `DcmT` | 11 | -1 | 1023 |  |

## teamballs

Binary code: `TWRE`. Record type: `Fc27Record<'teamballs', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 | Yes |
| `balltype` | `number` | `DBOFIELDTYPE_INTEGER` | `NEfB` | 3 | 0 | 7 |  |
| `isavailableinstore` | `number` | `DBOFIELDTYPE_INTEGER` | `MdKk` | 1 | 0 | 1 |  |
| `isembargoed` | `number` | `DBOFIELDTYPE_INTEGER` | `nokh` | 1 | 0 | 1 |  |
| `islicensed` | `number` | `DBOFIELDTYPE_INTEGER` | `oyWe` | 1 | 0 | 1 |  |
| `isrewardable` | `number` | `DBOFIELDTYPE_INTEGER` | `kuMU` | 1 | 0 | 1 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |

## teamcounterparts

Binary code: `ImNE`. Record type: `Fc27Record<'teamcounterparts', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `femaleteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `Ibup` | 18 | -1 | 200000 |  |
| `femaleteamname` | `string` | `DBOFIELDTYPE_STRING` | `MYrf` | 480 | 0 | 0 |  |
| `maleteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `QmlU` | 18 | -1 | 200000 | Yes |
| `maleteamname` | `string` | `DBOFIELDTYPE_STRING` | `ppxQ` | 480 | 0 | 0 |  |

## teamformationteamstylelinks

Binary code: `TKgq`. Record type: `Fc27Record<'teamformationteamstylelinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `cddl` | `number` | `DBOFIELDTYPE_INTEGER` | `vzHn` | 7 | 0 | 100 |  |
| `formationid` | `number` | `DBOFIELDTYPE_INTEGER` | `oHkj` | 10 | 0 | 1000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -2 | 200000 | Yes |
| `teamstyleid` | `number` | `DBOFIELDTYPE_INTEGER` | `KjhG` | 10 | 0 | 1000 |  |

## teamformdiff

Binary code: `OIcD`. Record type: `Fc27Record<'teamformdiff', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `newattackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `Kjlq` | 7 | 0 | 99 |  |
| `newdefenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `WjAg` | 7 | 0 | 99 |  |
| `newmidfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `jjwz` | 7 | 0 | 99 |  |
| `newoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `xKVG` | 7 | 0 | 99 |  |
| `oldattackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `ArvO` | 7 | 0 | 99 |  |
| `olddefenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `kePB` | 7 | 0 | 99 |  |
| `oldmidfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `YxAQ` | 7 | 0 | 99 |  |
| `oldoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `HjSL` | 7 | 0 | 99 |  |
| `overallratingdiff` | `number` | `DBOFIELDTYPE_INTEGER` | `BssH` | 8 | -99 | 99 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## teamkithudvalues

Binary code: `SPRL`. Record type: `Fc27Record<'teamkithudvalues', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `kittype` | `number` | `DBOFIELDTYPE_INTEGER` | `eRor` | 4 | 0 | 10 |  |
| `pattern` | `number` | `DBOFIELDTYPE_INTEGER` | `bTnA` | 4 | 0 | 10 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 20 | 0 | 1000000 |  |
| `teamkitid` | `number` | `DBOFIELDTYPE_INTEGER` | `DPYU` | 20 | 0 | 1000000 | Yes |

## teamkits

Binary code: `GdtI`. Record type: `Fc27Record<'teamkits', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `armbandtype` | `number` | `DBOFIELDTYPE_INTEGER` | `pqlp` | 1 | 0 | 1 |  |
| `captainarmband` | `number` | `DBOFIELDTYPE_INTEGER` | `UgGf` | 9 | 0 | 511 |  |
| `chestbadge` | `number` | `DBOFIELDTYPE_INTEGER` | `hEvA` | 24 | 0 | 9999999 |  |
| `dlc` | `number` | `DBOFIELDTYPE_INTEGER` | `OIbl` | 1 | 0 | 1 |  |
| `hasadvertisingkit` | `number` | `DBOFIELDTYPE_INTEGER` | `lAgk` | 1 | 0 | 1 |  |
| `isembargoed` | `number` | `DBOFIELDTYPE_INTEGER` | `nokh` | 1 | 0 | 1 |  |
| `isgeneric` | `number` | `DBOFIELDTYPE_INTEGER` | `bULY` | 1 | 0 | 1 |  |
| `isinheritbasedetailmap` | `number` | `DBOFIELDTYPE_INTEGER` | `DNJD` | 1 | 0 | 1 |  |
| `islocked` | `number` | `DBOFIELDTYPE_INTEGER` | `NhCK` | 1 | 0 | 1 |  |
| `jerseybacknamefontcase` | `number` | `DBOFIELDTYPE_INTEGER` | `LZNA` | 2 | 0 | 2 |  |
| `jerseybacknameplacementcode` | `number` | `DBOFIELDTYPE_INTEGER` | `vMtY` | 8 | 0 | 255 |  |
| `jerseycollargeometrytype` | `number` | `DBOFIELDTYPE_INTEGER` | `MQyn` | 8 | 0 | 255 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 1 | 0 | 1 |  |
| `jerseyfrontnumberplacementcode` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaE` | 8 | 0 | 255 |  |
| `jerseyleftsleevebadge` | `number` | `DBOFIELDTYPE_INTEGER` | `BKca` | 24 | 0 | 9999999 |  |
| `jerseynamecolorb` | `number` | `DBOFIELDTYPE_INTEGER` | `Uggt` | 8 | 0 | 255 |  |
| `jerseynamecolorg` | `number` | `DBOFIELDTYPE_INTEGER` | `MSIa` | 8 | 0 | 255 |  |
| `jerseynamecolorr` | `number` | `DBOFIELDTYPE_INTEGER` | `tvQp` | 8 | 0 | 255 |  |
| `jerseynamefonttype` | `number` | `DBOFIELDTYPE_INTEGER` | `TEgR` | 9 | 0 | 511 |  |
| `jerseynamelayouttype` | `number` | `DBOFIELDTYPE_INTEGER` | `bieS` | 8 | 0 | 255 |  |
| `jerseynameoutlinecolorb` | `number` | `DBOFIELDTYPE_INTEGER` | `Rjqb` | 8 | 0 | 255 |  |
| `jerseynameoutlinecolorg` | `number` | `DBOFIELDTYPE_INTEGER` | `JZus` | 8 | 0 | 255 |  |
| `jerseynameoutlinecolorr` | `number` | `DBOFIELDTYPE_INTEGER` | `wsGP` | 8 | 0 | 255 |  |
| `jerseynameoutlinewidth` | `number` | `DBOFIELDTYPE_INTEGER` | `ZqLl` | 4 | 0 | 9 |  |
| `jerseynumbercolorprimb` | `number` | `DBOFIELDTYPE_INTEGER` | `fpEX` | 8 | 0 | 255 |  |
| `jerseynumbercolorprimg` | `number` | `DBOFIELDTYPE_INTEGER` | `bXAI` | 8 | 0 | 255 |  |
| `jerseynumbercolorprimr` | `number` | `DBOFIELDTYPE_INTEGER` | `GCoH` | 8 | 0 | 255 |  |
| `jerseynumbercolorsecb` | `number` | `DBOFIELDTYPE_INTEGER` | `Jjet` | 8 | 0 | 255 |  |
| `jerseynumbercolorsecg` | `number` | `DBOFIELDTYPE_INTEGER` | `ZZGe` | 8 | 0 | 255 |  |
| `jerseynumbercolorsecr` | `number` | `DBOFIELDTYPE_INTEGER` | `gsuF` | 8 | 0 | 255 |  |
| `jerseynumbercolorterb` | `number` | `DBOFIELDTYPE_INTEGER` | `jpFw` | 8 | 0 | 255 |  |
| `jerseynumbercolorterg` | `number` | `DBOFIELDTYPE_INTEGER` | `bLBP` | 8 | 0 | 255 |  |
| `jerseynumbercolorterr` | `number` | `DBOFIELDTYPE_INTEGER` | `eCpU` | 8 | 0 | 255 |  |
| `jerseyrenderingdetailmaptype` | `number` | `DBOFIELDTYPE_INTEGER` | `aNtq` | 8 | 0 | 255 |  |
| `jerseyrestriction` | `number` | `DBOFIELDTYPE_INTEGER` | `lHax` | 2 | 0 | 2 |  |
| `jerseyrightsleevebadge` | `number` | `DBOFIELDTYPE_INTEGER` | `SwCX` | 24 | 0 | 9999999 |  |
| `jerseyshapestyle` | `number` | `DBOFIELDTYPE_INTEGER` | `IkRY` | 8 | 0 | 255 |  |
| `jerseytemplateindex` | `number` | `DBOFIELDTYPE_INTEGER` | `mDwe` | 4 | 0 | 11 |  |
| `numberfonttype` | `number` | `DBOFIELDTYPE_INTEGER` | `iNiN` | 9 | 0 | 511 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |
| `renderingmaterialtype` | `number` | `DBOFIELDTYPE_INTEGER` | `iZRe` | 8 | 0 | 255 |  |
| `shortsnumbercolorprimb` | `number` | `DBOFIELDTYPE_INTEGER` | `uAKR` | 8 | 0 | 255 |  |
| `shortsnumbercolorprimg` | `number` | `DBOFIELDTYPE_INTEGER` | `myaC` | 8 | 0 | 255 |  |
| `shortsnumbercolorprimr` | `number` | `DBOFIELDTYPE_INTEGER` | `TPaN` | 8 | 0 | 255 |  |
| `shortsnumbercolorsecb` | `number` | `DBOFIELDTYPE_INTEGER` | `JtVK` | 8 | 0 | 255 |  |
| `shortsnumbercolorsecg` | `number` | `DBOFIELDTYPE_INTEGER` | `NTld` | 8 | 0 | 255 |  |
| `shortsnumbercolorsecr` | `number` | `DBOFIELDTYPE_INTEGER` | `wGly` | 8 | 0 | 255 |  |
| `shortsnumbercolorterb` | `number` | `DBOFIELDTYPE_INTEGER` | `XvaL` | 8 | 0 | 255 |  |
| `shortsnumbercolorterg` | `number` | `DBOFIELDTYPE_INTEGER` | `zJKo` | 8 | 0 | 255 |  |
| `shortsnumbercolorterr` | `number` | `DBOFIELDTYPE_INTEGER` | `CUKn` | 8 | 0 | 255 |  |
| `shortsnumberfonttype` | `number` | `DBOFIELDTYPE_INTEGER` | `Vyfr` | 9 | 0 | 511 |  |
| `shortsnumberplacementcode` | `number` | `DBOFIELDTYPE_INTEGER` | `zdlB` | 8 | 0 | 255 |  |
| `shortsrenderingdetailmaptype` | `number` | `DBOFIELDTYPE_INTEGER` | `MbnD` | 8 | 0 | 255 |  |
| `shortstemplateindex` | `number` | `DBOFIELDTYPE_INTEGER` | `QcIQ` | 2 | 0 | 2 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 3 | 0 | 7 |  |
| `sockstemplateindex` | `number` | `DBOFIELDTYPE_INTEGER` | `KFtw` | 3 | 0 | 4 |  |
| `teamcolorprimb` | `number` | `DBOFIELDTYPE_INTEGER` | `Qhfp` | 8 | 0 | 255 |  |
| `teamcolorprimg` | `number` | `DBOFIELDTYPE_INTEGER` | `MHXK` | 8 | 0 | 255 |  |
| `teamcolorprimpercent` | `number` | `DBOFIELDTYPE_INTEGER` | `KRfU` | 7 | 0 | 100 |  |
| `teamcolorprimr` | `number` | `DBOFIELDTYPE_INTEGER` | `dSvZ` | 8 | 0 | 255 |  |
| `teamcolorsecb` | `number` | `DBOFIELDTYPE_INTEGER` | `jUaD` | 8 | 0 | 255 |  |
| `teamcolorsecg` | `number` | `DBOFIELDTYPE_INTEGER` | `neKc` | 8 | 0 | 255 |  |
| `teamcolorsecpercent` | `number` | `DBOFIELDTYPE_INTEGER` | `lROa` | 7 | 0 | 100 |  |
| `teamcolorsecr` | `number` | `DBOFIELDTYPE_INTEGER` | `OvKn` | 8 | 0 | 255 |  |
| `teamcolortertb` | `number` | `DBOFIELDTYPE_INTEGER` | `XAnO` | 8 | 0 | 255 |  |
| `teamcolortertg` | `number` | `DBOFIELDTYPE_INTEGER` | `zyzx` | 8 | 0 | 255 |  |
| `teamcolortertpercent` | `number` | `DBOFIELDTYPE_INTEGER` | `yrUn` | 7 | 0 | 100 |  |
| `teamcolortertr` | `number` | `DBOFIELDTYPE_INTEGER` | `CPDe` | 8 | 0 | 255 |  |
| `teamkitid` | `number` | `DBOFIELDTYPE_INTEGER` | `DPYU` | 16 | 0 | 50000 |  |
| `teamkittypetechid` | `number` | `DBOFIELDTYPE_INTEGER` | `MlXB` | 5 | 0 | 22 |  |
| `teamtechid` | `number` | `DBOFIELDTYPE_INTEGER` | `qljg` | 18 | -1 | 200000 | Yes |
| `year` | `number` | `DBOFIELDTYPE_INTEGER` | `qFnd` | 11 | 0 | 2027 |  |

## teamnationlinks

Binary code: `CxJp`. Record type: `Fc27Record<'teamnationlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `leagueid` | `number` | `DBOFIELDTYPE_INTEGER` | `aQrQ` | 12 | -1 | 4000 |  |
| `nationid` | `number` | `DBOFIELDTYPE_INTEGER` | `LEtt` | 12 | 0 | 3000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## teamplayerlinks

Binary code: `RrqT`. Record type: `Fc27Record<'teamplayerlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 19 | 0 | 300000 | Yes |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 3 | 0 | 5 |  |
| `injury` | `number` | `DBOFIELDTYPE_INTEGER` | `Vili` | 6 | 0 | 35 |  |
| `isamongtopscorers` | `number` | `DBOFIELDTYPE_INTEGER` | `SuuG` | 1 | 0 | 1 |  |
| `isamongtopscorersinteam` | `number` | `DBOFIELDTYPE_INTEGER` | `pchV` | 1 | 0 | 1 |  |
| `istopscorer` | `number` | `DBOFIELDTYPE_INTEGER` | `YbEm` | 1 | 0 | 1 |  |
| `jerseynumber` | `number` | `DBOFIELDTYPE_INTEGER` | `JFiY` | 7 | 1 | 99 |  |
| `leagueappearances` | `number` | `DBOFIELDTYPE_INTEGER` | `stFk` | 6 | 0 | 50 |  |
| `leaguegoals` | `number` | `DBOFIELDTYPE_INTEGER` | `UMDX` | 8 | 0 | 200 |  |
| `leaguegoalsprevmatch` | `number` | `DBOFIELDTYPE_INTEGER` | `NbFh` | 4 | 0 | 10 |  |
| `leaguegoalsprevthreematches` | `number` | `DBOFIELDTYPE_INTEGER` | `dGNm` | 5 | 0 | 25 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 6 | 0 | 33 |  |
| `reds` | `number` | `DBOFIELDTYPE_INTEGER` | `jIcz` | 5 | 0 | 20 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `yellows` | `number` | `DBOFIELDTYPE_INTEGER` | `jtWI` | 6 | 0 | 40 |  |

## teamplayerlinks_vh

Binary code: `RnPg`. Record type: `Fc27Record<'teamplayerlinks_vh', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 19 | 0 | 300000 | Yes |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 3 | 0 | 5 |  |
| `injury` | `number` | `DBOFIELDTYPE_INTEGER` | `Vili` | 6 | 0 | 35 |  |
| `isamongtopscorers` | `number` | `DBOFIELDTYPE_INTEGER` | `SuuG` | 1 | 0 | 1 |  |
| `isamongtopscorersinteam` | `number` | `DBOFIELDTYPE_INTEGER` | `pchV` | 1 | 0 | 1 |  |
| `istopscorer` | `number` | `DBOFIELDTYPE_INTEGER` | `YbEm` | 1 | 0 | 1 |  |
| `jerseynumber` | `number` | `DBOFIELDTYPE_INTEGER` | `JFiY` | 7 | 1 | 99 |  |
| `leagueappearances` | `number` | `DBOFIELDTYPE_INTEGER` | `stFk` | 6 | 0 | 50 |  |
| `leaguegoals` | `number` | `DBOFIELDTYPE_INTEGER` | `UMDX` | 8 | 0 | 200 |  |
| `leaguegoalsprevmatch` | `number` | `DBOFIELDTYPE_INTEGER` | `NbFh` | 4 | 0 | 10 |  |
| `leaguegoalsprevthreematches` | `number` | `DBOFIELDTYPE_INTEGER` | `dGNm` | 5 | 0 | 25 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 6 | 0 | 33 |  |
| `reds` | `number` | `DBOFIELDTYPE_INTEGER` | `jIcz` | 5 | 0 | 20 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `yellows` | `number` | `DBOFIELDTYPE_INTEGER` | `jtWI` | 6 | 0 | 40 |  |

## teams

Binary code: `lyxL`. Record type: `Fc27Record<'teams', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 32 | -2147483648 | 2147483647 |  |
| `attackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UAKP` | 7 | 0 | 99 |  |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 |  |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | -1 | 500000 |  |
| `cityid` | `number` | `DBOFIELDTYPE_INTEGER` | `pNIL` | 10 | 0 | 1023 |  |
| `cksupport1` | `number` | `DBOFIELDTYPE_INTEGER` | `tFoZ` | 19 | 0 | 500000 |  |
| `cksupport2` | `number` | `DBOFIELDTYPE_INTEGER` | `cwNn` | 19 | 0 | 500000 |  |
| `cksupport3` | `number` | `DBOFIELDTYPE_INTEGER` | `nzJx` | 19 | 0 | 500000 |  |
| `cksupport4` | `number` | `DBOFIELDTYPE_INTEGER` | `pbQy` | 19 | 0 | 500000 |  |
| `cksupport5` | `number` | `DBOFIELDTYPE_INTEGER` | `mgAw` | 19 | 0 | 500000 |  |
| `cksupport6` | `number` | `DBOFIELDTYPE_INTEGER` | `XpxO` | 19 | 0 | 500000 |  |
| `cksupport7` | `number` | `DBOFIELDTYPE_INTEGER` | `sitE` | 19 | 0 | 500000 |  |
| `cksupport8` | `number` | `DBOFIELDTYPE_INTEGER` | `gZYN` | 19 | 0 | 500000 |  |
| `cksupport9` | `number` | `DBOFIELDTYPE_INTEGER` | `fSIH` | 19 | 0 | 500000 |  |
| `clubworth` | `number` | `DBOFIELDTYPE_INTEGER` | `QSnJ` | 24 | 0 | 9999999 |  |
| `cornerflagpolecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `tYEa` | 5 | 0 | 20 |  |
| `crowdregion` | `number` | `DBOFIELDTYPE_INTEGER` | `Edjp` | 5 | 0 | 31 |  |
| `crowdskintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `KvHw` | 7 | 0 | 100 |  |
| `defenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `btsS` | 7 | 0 | 99 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `domesticcups` | `number` | `DBOFIELDTYPE_INTEGER` | `zqra` | 10 | 0 | 1023 |  |
| `domesticprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `ppLE` | 5 | 0 | 20 |  |
| `ethnicity` | `number` | `DBOFIELDTYPE_INTEGER` | `aArc` | 4 | 1 | 11 |  |
| `favoriteteamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `PccS` | 10 | -1 | 1000 |  |
| `flamethrowercannon` | `number` | `DBOFIELDTYPE_INTEGER` | `pqZD` | 3 | 0 | 4 |  |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 7 | 0 | 100 |  |
| `foundationyear` | `number` | `DBOFIELDTYPE_INTEGER` | `yDDQ` | 8 | 1800 | 2050 |  |
| `freekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `LfBw` | 19 | -1 | 500000 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `genericbanner` | `number` | `DBOFIELDTYPE_INTEGER` | `jfmo` | 1 | 0 | 1 |  |
| `genericint1` | `number` | `DBOFIELDTYPE_INTEGER` | `NSMy` | 7 | -1 | 100 |  |
| `genericint2` | `number` | `DBOFIELDTYPE_INTEGER` | `MLlE` | 7 | -1 | 100 |  |
| `goalnetstanchioncolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `Tnbc` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `PNLv` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `WELo` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `gCAn` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `oEoM` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `BZQX` | 8 | 0 | 255 |  |
| `haslargeflag` | `number` | `DBOFIELDTYPE_INTEGER` | `QgOx` | 2 | 0 | 2 |  |
| `hasstandingcrowd` | `number` | `DBOFIELDTYPE_INTEGER` | `NOYS` | 2 | 0 | 3 |  |
| `hassubstitutionboard` | `number` | `DBOFIELDTYPE_INTEGER` | `kfND` | 1 | 0 | 1 |  |
| `hassuncanthem` | `number` | `DBOFIELDTYPE_INTEGER` | `sqra` | 1 | 0 | 1 |  |
| `hastifo` | `number` | `DBOFIELDTYPE_INTEGER` | `BdXK` | 2 | 0 | 2 |  |
| `hasvikingclap` | `number` | `DBOFIELDTYPE_INTEGER` | `VsCG` | 1 | 0 | 1 |  |
| `internationalprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `edvw` | 5 | 0 | 20 |  |
| `isbannerenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `uhiM` | 2 | 0 | 2 |  |
| `iscompetitioncrowdcardsenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `FtgW` | 2 | 0 | 3 |  |
| `iscompetitionpoleflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `eLCT` | 2 | 0 | 2 |  |
| `iscompetitionscarfenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `VtHL` | 2 | 0 | 2 |  |
| `jerseytype` | `number` | `DBOFIELDTYPE_INTEGER` | `zgDG` | 2 | 0 | 2 |  |
| `latitude` | `number` | `DBOFIELDTYPE_INTEGER` | `sjQg` | 8 | -90 | 90 |  |
| `leaguetitles` | `number` | `DBOFIELDTYPE_INTEGER` | `cpXo` | 10 | 0 | 1023 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | -1 | 500000 |  |
| `leftfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WLKn` | 19 | -1 | 500000 |  |
| `longitude` | `number` | `DBOFIELDTYPE_INTEGER` | `NQXQ` | 9 | -180 | 180 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | -1 | 500000 |  |
| `matchdayattackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `jmRz` | 7 | 0 | 99 |  |
| `matchdaydefenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `zHfR` | 7 | 0 | 99 |  |
| `matchdaymidfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `HHDP` | 7 | 0 | 99 |  |
| `matchdayoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `sqCP` | 7 | 0 | 99 |  |
| `midfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `SqFN` | 7 | 0 | 99 |  |
| `numtransfersin` | `number` | `DBOFIELDTYPE_INTEGER` | `Gjri` | 5 | 0 | 31 |  |
| `opponentstrongthreshold` | `number` | `DBOFIELDTYPE_INTEGER` | `MQCj` | 8 | -100 | 100 |  |
| `opponentweakthreshold` | `number` | `DBOFIELDTYPE_INTEGER` | `Umue` | 8 | -100 | 100 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 0 | 99 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | -1 | 500000 |  |
| `personalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `IIKl` | 2 | 0 | 2 |  |
| `pitchcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `lzGH` | 4 | 0 | 10 |  |
| `pitchlinecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `IOSv` | 4 | 0 | 10 |  |
| `pitchwear` | `number` | `DBOFIELDTYPE_INTEGER` | `kjiI` | 4 | 0 | 10 |  |
| `playsurfacetype` | `number` | `DBOFIELDTYPE_INTEGER` | `vFwL` | 3 | 0 | 7 |  |
| `popularity` | `number` | `DBOFIELDTYPE_INTEGER` | `FcOK` | 4 | 0 | 10 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |
| `presassetone` | `number` | `DBOFIELDTYPE_INTEGER` | `TdUB` | 1 | 0 | 1 |  |
| `presassettwo` | `number` | `DBOFIELDTYPE_INTEGER` | `UjYK` | 2 | 0 | 3 |  |
| `prev_el_champ` | `number` | `DBOFIELDTYPE_INTEGER` | `YTAn` | 1 | 0 | 1 |  |
| `profitability` | `number` | `DBOFIELDTYPE_INTEGER` | `hXEu` | 4 | 0 | 10 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | -1 | 500000 |  |
| `rightfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `TxVD` | 19 | -1 | 500000 |  |
| `rivalteam` | `number` | `DBOFIELDTYPE_INTEGER` | `erSL` | 18 | 1 | 200000 |  |
| `skinnyflags` | `number` | `DBOFIELDTYPE_INTEGER` | `WwbT` | 1 | 0 | 1 |  |
| `stadiumgoalnetpattern` | `number` | `DBOFIELDTYPE_INTEGER` | `LOZj` | 1 | 0 | 1 |  |
| `stadiumgoalnetstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `CauK` | 6 | 0 | 63 |  |
| `stadiummowpattern_code` | `number` | `DBOFIELDTYPE_INTEGER` | `dUTO` | 5 | 0 | 17 |  |
| `stanchionflamethrower` | `number` | `DBOFIELDTYPE_INTEGER` | `XDPj` | 2 | 0 | 2 |  |
| `teamcolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `EVjc` | 8 | 0 | 255 |  |
| `teamcolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `UrDD` | 8 | 0 | 255 |  |
| `teamcolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `lWTE` | 8 | 0 | 255 |  |
| `teamcolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `PcIL` | 8 | 0 | 255 |  |
| `teamcolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `rags` | 8 | 0 | 255 |  |
| `teamcolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `KzYP` | 8 | 0 | 255 |  |
| `teamcolor3b` | `number` | `DBOFIELDTYPE_INTEGER` | `Gzty` | 8 | 0 | 255 |  |
| `teamcolor3g` | `number` | `DBOFIELDTYPE_INTEGER` | `Olxh` | 8 | 0 | 255 |  |
| `teamcolor3r` | `number` | `DBOFIELDTYPE_INTEGER` | `Tsda` | 8 | 0 | 255 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `teamname` | `string` | `DBOFIELDTYPE_STRING` | `AUsv` | 480 | 0 | 0 |  |
| `teamstadiumcapacity` | `number` | `DBOFIELDTYPE_INTEGER` | `TehK` | 20 | 0 | 999999 |  |
| `throwerleft` | `number` | `DBOFIELDTYPE_INTEGER` | `xPHY` | 19 | 0 | 500000 |  |
| `throwerright` | `number` | `DBOFIELDTYPE_INTEGER` | `Uwwk` | 19 | 0 | 500000 |  |
| `trainingstadium` | `number` | `DBOFIELDTYPE_INTEGER` | `WvVx` | 11 | 0 | 2000 |  |
| `trait1vequal` | `number` | `DBOFIELDTYPE_INTEGER` | `TPvg` | 23 | 0 | 8388607 |  |
| `trait1vstrong` | `number` | `DBOFIELDTYPE_INTEGER` | `aDMz` | 23 | 0 | 8388607 |  |
| `trait1vweak` | `number` | `DBOFIELDTYPE_INTEGER` | `kzMW` | 23 | 0 | 8388607 |  |
| `uefa_cl_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `hJha` | 9 | 0 | 256 |  |
| `uefa_consecutive_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `ZKAU` | 9 | 0 | 256 |  |
| `uefa_el_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `yhYg` | 9 | 0 | 256 |  |
| `uefa_uecl_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `igKs` | 9 | 0 | 256 |  |
| `utcoffset` | `number` | `DBOFIELDTYPE_INTEGER` | `Csgu` | 5 | -12 | 13 |  |
| `youthdevelopment` | `number` | `DBOFIELDTYPE_INTEGER` | `HNrf` | 4 | 0 | 10 |  |

## teamsheetanalysis

Binary code: `fqec`. Record type: `Fc27Record<'teamsheetanalysis', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `positionrecorded` | `number` | `DBOFIELDTYPE_INTEGER` | `WAct` | 5 | 0 | 27 |  |

## teamsheets

Binary code: `GkeN`. Record type: `Fc27Record<'teamsheets', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | -1 | 500000 |  |
| `cksupport1` | `number` | `DBOFIELDTYPE_INTEGER` | `tFoZ` | 19 | -1 | 500000 |  |
| `cksupport2` | `number` | `DBOFIELDTYPE_INTEGER` | `cwNn` | 19 | -1 | 500000 |  |
| `cksupport3` | `number` | `DBOFIELDTYPE_INTEGER` | `nzJx` | 19 | -1 | 500000 |  |
| `cksupport4` | `number` | `DBOFIELDTYPE_INTEGER` | `pbQy` | 19 | -1 | 500000 |  |
| `cksupport5` | `number` | `DBOFIELDTYPE_INTEGER` | `mgAw` | 19 | -1 | 500000 |  |
| `cksupport6` | `number` | `DBOFIELDTYPE_INTEGER` | `XpxO` | 19 | -1 | 500000 |  |
| `cksupport7` | `number` | `DBOFIELDTYPE_INTEGER` | `sitE` | 19 | -1 | 500000 |  |
| `cksupport8` | `number` | `DBOFIELDTYPE_INTEGER` | `gZYN` | 19 | -1 | 500000 |  |
| `cksupport9` | `number` | `DBOFIELDTYPE_INTEGER` | `fSIH` | 19 | -1 | 500000 |  |
| `customsub0in` | `number` | `DBOFIELDTYPE_INTEGER` | `bveC` | 19 | -1 | 500000 |  |
| `customsub0out` | `number` | `DBOFIELDTYPE_INTEGER` | `ohUP` | 19 | -1 | 500000 |  |
| `customsub1in` | `number` | `DBOFIELDTYPE_INTEGER` | `aNgZ` | 19 | -1 | 500000 |  |
| `customsub1out` | `number` | `DBOFIELDTYPE_INTEGER` | `sdHe` | 19 | -1 | 500000 |  |
| `customsub2in` | `number` | `DBOFIELDTYPE_INTEGER` | `cTCk` | 19 | -1 | 500000 |  |
| `customsub2out` | `number` | `DBOFIELDTYPE_INTEGER` | `aoQg` | 19 | -1 | 500000 |  |
| `isfavourite` | `number` | `DBOFIELDTYPE_INTEGER` | `lBkr` | 2 | -1 | 1 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | -1 | 500000 |  |
| `leftfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WLKn` | 19 | -1 | 500000 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | -1 | 500000 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | -1 | 500000 |  |
| `playerid0` | `number` | `DBOFIELDTYPE_INTEGER` | `MVLC` | 19 | -1 | 500000 |  |
| `playerid1` | `number` | `DBOFIELDTYPE_INTEGER` | `zWHI` | 19 | -1 | 500000 |  |
| `playerid10` | `number` | `DBOFIELDTYPE_INTEGER` | `qhEx` | 19 | -1 | 500000 |  |
| `playerid11` | `number` | `DBOFIELDTYPE_INTEGER` | `ZaUj` | 19 | -1 | 500000 |  |
| `playerid12` | `number` | `DBOFIELDTYPE_INTEGER` | `UTxV` | 19 | -1 | 500000 |  |
| `playerid13` | `number` | `DBOFIELDTYPE_INTEGER` | `HYBP` | 19 | -1 | 500000 |  |
| `playerid14` | `number` | `DBOFIELDTYPE_INTEGER` | `xckU` | 19 | -1 | 500000 |  |
| `playerid15` | `number` | `DBOFIELDTYPE_INTEGER` | `SfAa` | 19 | -1 | 500000 |  |
| `playerid16` | `number` | `DBOFIELDTYPE_INTEGER` | `PmFc` | 19 | -1 | 500000 |  |
| `playerid17` | `number` | `DBOFIELDTYPE_INTEGER` | `MlJq` | 19 | -1 | 500000 |  |
| `playerid18` | `number` | `DBOFIELDTYPE_INTEGER` | `EyUf` | 19 | -1 | 500000 |  |
| `playerid19` | `number` | `DBOFIELDTYPE_INTEGER` | `bxkp` | 19 | -1 | 500000 |  |
| `playerid2` | `number` | `DBOFIELDTYPE_INTEGER` | `SfCW` | 19 | -1 | 500000 |  |
| `playerid20` | `number` | `DBOFIELDTYPE_INTEGER` | `hozK` | 19 | -1 | 500000 |  |
| `playerid21` | `number` | `DBOFIELDTYPE_INTEGER` | `yrvw` | 19 | -1 | 500000 |  |
| `playerid22` | `number` | `DBOFIELDTYPE_INTEGER` | `fySi` | 19 | -1 | 500000 |  |
| `playerid23` | `number` | `DBOFIELDTYPE_INTEGER` | `gxCc` | 19 | -1 | 500000 |  |
| `playerid24` | `number` | `DBOFIELDTYPE_INTEGER` | `iVHj` | 19 | -1 | 500000 |  |
| `playerid25` | `number` | `DBOFIELDTYPE_INTEGER` | `xODp` | 19 | -1 | 500000 |  |
| `playerid26` | `number` | `DBOFIELDTYPE_INTEGER` | `cHyr` | 19 | -1 | 500000 |  |
| `playerid27` | `number` | `DBOFIELDTYPE_INTEGER` | `jMiF` | 19 | -1 | 500000 |  |
| `playerid28` | `number` | `DBOFIELDTYPE_INTEGER` | `bXPw` | 19 | -1 | 500000 |  |
| `playerid29` | `number` | `DBOFIELDTYPE_INTEGER` | `ocLy` | 19 | -1 | 500000 |  |
| `playerid3` | `number` | `DBOFIELDTYPE_INTEGER` | `Ncmk` | 19 | -1 | 500000 |  |
| `playerid30` | `number` | `DBOFIELDTYPE_INTEGER` | `ILuX` | 19 | -1 | 500000 |  |
| `playerid31` | `number` | `DBOFIELDTYPE_INTEGER` | `HQyJ` | 19 | -1 | 500000 |  |
| `playerid32` | `number` | `DBOFIELDTYPE_INTEGER` | `WJDv` | 19 | -1 | 500000 |  |
| `playerid33` | `number` | `DBOFIELDTYPE_INTEGER` | `FCTp` | 19 | -1 | 500000 |  |
| `playerid34` | `number` | `DBOFIELDTYPE_INTEGER` | `LaCu` | 19 | -1 | 500000 |  |
| `playerid35` | `number` | `DBOFIELDTYPE_INTEGER` | `EZGA` | 19 | -1 | 500000 |  |
| `playerid36` | `number` | `DBOFIELDTYPE_INTEGER` | `VgjC` | 19 | -1 | 500000 |  |
| `playerid37` | `number` | `DBOFIELDTYPE_INTEGER` | `GjzQ` | 19 | -1 | 500000 |  |
| `playerid38` | `number` | `DBOFIELDTYPE_INTEGER` | `SAKJ` | 19 | -1 | 500000 |  |
| `playerid39` | `number` | `DBOFIELDTYPE_INTEGER` | `NDOL` | 19 | -1 | 500000 |  |
| `playerid4` | `number` | `DBOFIELDTYPE_INTEGER` | `Povf` | 19 | -1 | 500000 |  |
| `playerid40` | `number` | `DBOFIELDTYPE_INTEGER` | `fyAg` | 19 | -1 | 500000 |  |
| `playerid41` | `number` | `DBOFIELDTYPE_INTEGER` | `AFka` | 19 | -1 | 500000 |  |
| `playerid42` | `number` | `DBOFIELDTYPE_INTEGER` | `BwJM` | 19 | -1 | 500000 |  |
| `playerid43` | `number` | `DBOFIELDTYPE_INTEGER` | `KrFy` | 19 | -1 | 500000 |  |
| `playerid44` | `number` | `DBOFIELDTYPE_INTEGER` | `cnUF` | 19 | -1 | 500000 |  |
| `playerid45` | `number` | `DBOFIELDTYPE_INTEGER` | `DkET` | 19 | -1 | 500000 |  |
| `playerid46` | `number` | `DBOFIELDTYPE_INTEGER` | `CtBV` | 19 | -1 | 500000 |  |
| `playerid47` | `number` | `DBOFIELDTYPE_INTEGER` | `Juxb` | 19 | -1 | 500000 |  |
| `playerid48` | `number` | `DBOFIELDTYPE_INTEGER` | `VNUO` | 19 | -1 | 500000 |  |
| `playerid49` | `number` | `DBOFIELDTYPE_INTEGER` | `uOEg` | 19 | -1 | 500000 |  |
| `playerid5` | `number` | `DBOFIELDTYPE_INTEGER` | `wjrR` | 19 | -1 | 500000 |  |
| `playerid50` | `number` | `DBOFIELDTYPE_INTEGER` | `mdlt` | 19 | -1 | 500000 |  |
| `playerid51` | `number` | `DBOFIELDTYPE_INTEGER` | `deBn` | 19 | -1 | 500000 |  |
| `playerid6` | `number` | `DBOFIELDTYPE_INTEGER` | `RaOP` | 19 | -1 | 500000 |  |
| `playerid7` | `number` | `DBOFIELDTYPE_INTEGER` | `OhyJ` | 19 | -1 | 500000 |  |
| `playerid8` | `number` | `DBOFIELDTYPE_INTEGER` | `WCfU` | 19 | -1 | 500000 |  |
| `playerid9` | `number` | `DBOFIELDTYPE_INTEGER` | `FJbC` | 19 | -1 | 500000 |  |
| `profileid` | `number` | `DBOFIELDTYPE_INTEGER` | `qbEx` | 4 | -1 | 7 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | -1 | 500000 |  |
| `rightfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `TxVD` | 19 | -1 | 500000 |  |
| `sourceformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `CeOS` | 19 | -1 | 500000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `teamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `jfDM` | 10 | 0 | 1000 | Yes |
| `teamsheetname` | `string` | `DBOFIELDTYPE_STRING` | `TrVp` | 640 | 0 | 0 |  |
| `throwerleft` | `number` | `DBOFIELDTYPE_INTEGER` | `xPHY` | 19 | -1 | 500000 |  |
| `throwerright` | `number` | `DBOFIELDTYPE_INTEGER` | `Uwwk` | 19 | -1 | 500000 |  |

## teamsponsorlinks

Binary code: `nrFl`. Record type: `Fc27Record<'teamsponsorlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `adsponserid` | `number` | `DBOFIELDTYPE_INTEGER` | `Laxd` | 13 | 0 | 8191 |  |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 13 | 0 | 8191 | Yes |
| `dynamicimageid` | `number` | `DBOFIELDTYPE_INTEGER` | `zlDt` | 13 | 0 | 8191 |  |
| `isapproved` | `number` | `DBOFIELDTYPE_INTEGER` | `McUr` | 1 | 0 | 1 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## teamstadiumlinks

Binary code: `kISL`. Record type: `Fc27Record<'teamstadiumlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `forcedhome` | `number` | `DBOFIELDTYPE_INTEGER` | `WMtm` | 1 | 0 | 1 |  |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 11 | -1 | 2000 |  |
| `swapcrowdplacement` | `number` | `DBOFIELDTYPE_INTEGER` | `GdYI` | 1 | 0 | 1 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |

## teamstadiumlinkscache

Binary code: `FPYB`. Record type: `Fc27Record<'teamstadiumlinkscache', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `stadiumid` | `number` | `DBOFIELDTYPE_INTEGER` | `fwCQ` | 8 | 0 | 255 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | 1 | 200000 | Yes |

## temp_createplayer

Binary code: `Yvvv`. Record type: `Fc27Record<'temp_createplayer', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `celebrationid` | `number` | `DBOFIELDTYPE_INTEGER` | `IiYd` | 4 | 0 | 15 |  |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 10 | -1 | 1000 |  |
| `cpattributename_brow_colour` | `number` | `DBOFIELDTYPE_INTEGER` | `XGVv` | 7 | 0 | 99 |  |
| `cpattributename_brow_style` | `number` | `DBOFIELDTYPE_INTEGER` | `UvUj` | 7 | 0 | 99 |  |
| `cpattributename_eye_colour` | `number` | `DBOFIELDTYPE_INTEGER` | `qkPm` | 7 | 0 | 99 |  |
| `cpattributename_facial_hair_colour` | `number` | `DBOFIELDTYPE_INTEGER` | `nKQw` | 7 | 0 | 99 |  |
| `cpattributename_facial_hair_style` | `number` | `DBOFIELDTYPE_INTEGER` | `HgFu` | 7 | 0 | 99 |  |
| `cpattributename_hair_colour` | `number` | `DBOFIELDTYPE_INTEGER` | `KWAS` | 7 | 0 | 99 |  |
| `cpattributename_hair_style` | `number` | `DBOFIELDTYPE_INTEGER` | `yjcS` | 7 | 0 | 99 |  |
| `cpmorhpcomposite_chin_deatil_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `SiUz` | 32 | 0 | 0 |  |
| `cpmorhpcomposite_chin_postion_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `HMHk` | 32 | 0 | 0 |  |
| `cpmorhpcomposite_chin_protrusion_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `Wzqv` | 32 | 0 | 0 |  |
| `cpmorhpcomposite_chin_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `spkY` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browplacement_position_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `OJrj` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browplacement_protrusion_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `OpdU` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browplacement_thickness_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `rKhQ` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browplacement_tilt_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `OBRu` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browshape_protrusion_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `PSLD` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browshape_seperation_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `iKDm` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browshape_thickness_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `Ksvu` | 32 | 0 | 0 |  |
| `cpmorphcomposite_browshape_tilt_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `dZiE` | 32 | 0 | 0 |  |
| `cpmorphcomposite_cheekplacement_position_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `emxF` | 32 | 0 | 0 |  |
| `cpmorphcomposite_cheekplacement_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `SHPT` | 32 | 0 | 0 |  |
| `cpmorphcomposite_cheekstyle_blemishes_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `qcnI` | 32 | 0 | 0 |  |
| `cpmorphcomposite_cheekstyle_style_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `EdFz` | 32 | 0 | 0 |  |
| `cpmorphcomposite_dimpledarkness_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `AQff` | 32 | 0 | 0 |  |
| `cpmorphcomposite_earplacement_height_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `EzEF` | 32 | 0 | 0 |  |
| `cpmorphcomposite_earplacement_protrusion_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `QENf` | 32 | 0 | 0 |  |
| `cpmorphcomposite_earstyle_lobe_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `LBdN` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyedetail1_folds_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `cmyA` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyedetail1_protrusion_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `oymk` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyedetail1_symmetry_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `wxnm` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyedetail2_lowerlid_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `QdqV` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyedetail2_protrusion_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `ChOg` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyedetail2_upperlid_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `NRSq` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyeshape_height_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `jmdI` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyeshape_seperation_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `gLrR` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyeshape_shape_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `vZtG` | 32 | 0 | 0 |  |
| `cpmorphcomposite_eyeshape_tilt_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `LEMQ` | 32 | 0 | 0 |  |
| `cpmorphcomposite_jaw_bulk_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `nsEm` | 32 | 0 | 0 |  |
| `cpmorphcomposite_jaw_position_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `RpOU` | 32 | 0 | 0 |  |
| `cpmorphcomposite_jaw_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `XCVu` | 32 | 0 | 0 |  |
| `cpmorphcomposite_laughlinedarkness_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `oqVT` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lips_lowerlip_thickness_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `JjFi` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lips_lowerlip_thickness_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `GgJY` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lips_upperlip_shape_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `xQdI` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lips_upperlip_thickness_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `hpcW` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lipstyle_corners_leftright_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `lmrs` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lipstyle_corners_lipdimple_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `BuDh` | 32 | 0 | 0 |  |
| `cpmorphcomposite_lipstyle_corners_updown_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `hEdk` | 32 | 0 | 0 |  |
| `cpmorphcomposite_mouthblemishes_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `JEyM` | 32 | 0 | 0 |  |
| `cpmorphcomposite_mouthposition_bite_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `yJgI` | 32 | 0 | 0 |  |
| `cpmorphcomposite_mouthposition_position_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `RKoc` | 32 | 0 | 0 |  |
| `cpmorphcomposite_mouthposition_protrusion_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `gfAB` | 32 | 0 | 0 |  |
| `cpmorphcomposite_mouthposition_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `aKIQ` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseplacement_position_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `HqyQ` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseplacement_position_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `pSUy` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseplacement_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `wWem` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseplacement_width_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `amMg` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseprofile_protrusion_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `PKlA` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseprofile_shape_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `hrtX` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseprofile_tipprotrusion_rsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `dFzR` | 32 | 0 | 0 |  |
| `cpmorphcomposite_noseprofile_tipshape_rsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `tUVQ` | 32 | 0 | 0 |  |
| `cpmorphcomposite_nosestyle_nosestyle_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `cIca` | 32 | 0 | 0 |  |
| `cpmorphcomposite_nostrildetail_height_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `NnbC` | 32 | 0 | 0 |  |
| `cpmorphcomposite_nostrildetail_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `CSDz` | 32 | 0 | 0 |  |
| `cpmorphcomposite_nostrils_height_lsy` | `number \| null` | `DBOFIELDTYPE_REAL` | `NeXL` | 32 | 0 | 0 |  |
| `cpmorphcomposite_nostrils_width_lsx` | `number \| null` | `DBOFIELDTYPE_REAL` | `jktm` | 32 | 0 | 0 |  |
| `create_artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `RzAo` | 6 | 0 | 61 | Yes |
| `create_originalplayerid` | `number` | `DBOFIELDTYPE_INTEGER` | `pXwC` | 19 | 0 | 500000 |  |
| `create_playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `JAOM` | 19 | 0 | 500000 |  |

## temp_formations

Binary code: `qwYG`. Record type: `Fc27Record<'temp_formations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `attackers` | `number \| null` | `DBOFIELDTYPE_REAL` | `Gtld` | 32 | 0 | 0 |  |
| `defenders` | `number \| null` | `DBOFIELDTYPE_REAL` | `XsCF` | 32 | 0 | 0 |  |
| `formationaudioid` | `number` | `DBOFIELDTYPE_INTEGER` | `jMjY` | 5 | -1 | 30 |  |
| `formationfullnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `nFPu` | 6 | -1 | 40 |  |
| `formationid` | `number` | `DBOFIELDTYPE_INTEGER` | `oHkj` | 11 | 0 | 2000 | Yes |
| `formationname` | `string` | `DBOFIELDTYPE_STRING` | `LGsF` | 200 | 0 | 0 |  |
| `midfielders` | `number \| null` | `DBOFIELDTYPE_REAL` | `yYmh` | 32 | 0 | 0 |  |
| `offensiverating` | `number` | `DBOFIELDTYPE_INTEGER` | `QraJ` | 3 | 0 | 4 |  |
| `offset0x` | `number \| null` | `DBOFIELDTYPE_REAL` | `XjPa` | 32 | 0 | 0 |  |
| `offset0y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Eozk` | 32 | 0 | 0 |  |
| `offset10x` | `number \| null` | `DBOFIELDTYPE_REAL` | `jIiE` | 32 | 0 | 0 |  |
| `offset10y` | `number \| null` | `DBOFIELDTYPE_REAL` | `cLmS` | 32 | 0 | 0 |  |
| `offset1x` | `number \| null` | `DBOFIELDTYPE_REAL` | `yMyn` | 32 | 0 | 0 |  |
| `offset1y` | `number \| null` | `DBOFIELDTYPE_REAL` | `NPOx` | 32 | 0 | 0 |  |
| `offset2x` | `number \| null` | `DBOFIELDTYPE_REAL` | `pFxE` | 32 | 0 | 0 |  |
| `offset2y` | `number \| null` | `DBOFIELDTYPE_REAL` | `mytG` | 32 | 0 | 0 |  |
| `offset3x` | `number \| null` | `DBOFIELDTYPE_REAL` | `wKsR` | 32 | 0 | 0 |  |
| `offset3y` | `number \| null` | `DBOFIELDTYPE_REAL` | `PJwT` | 32 | 0 | 0 |  |
| `offset4x` | `number \| null` | `DBOFIELDTYPE_REAL` | `TzCW` | 32 | 0 | 0 |  |
| `offset4y` | `number \| null` | `DBOFIELDTYPE_REAL` | `Iwmo` | 32 | 0 | 0 |  |
| `offset5x` | `number \| null` | `DBOFIELDTYPE_REAL` | `usnj` | 32 | 0 | 0 |  |
| `offset5y` | `number \| null` | `DBOFIELDTYPE_REAL` | `RnDB` | 32 | 0 | 0 |  |
| `offset6x` | `number \| null` | `DBOFIELDTYPE_REAL` | `ZBMA` | 32 | 0 | 0 |  |
| `offset6y` | `number \| null` | `DBOFIELDTYPE_REAL` | `CCIK` | 32 | 0 | 0 |  |
| `offset7x` | `number \| null` | `DBOFIELDTYPE_REAL` | `gWJN` | 32 | 0 | 0 |  |
| `offset7y` | `number \| null` | `DBOFIELDTYPE_REAL` | `fdNX` | 32 | 0 | 0 |  |
| `offset8x` | `number \| null` | `DBOFIELDTYPE_REAL` | `DahS` | 32 | 0 | 0 |  |
| `offset8y` | `number \| null` | `DBOFIELDTYPE_REAL` | `MhRc` | 32 | 0 | 0 |  |
| `offset9x` | `number \| null` | `DBOFIELDTYPE_REAL` | `uBQf` | 32 | 0 | 0 |  |
| `offset9y` | `number \| null` | `DBOFIELDTYPE_REAL` | `lCgp` | 32 | 0 | 0 |  |
| `pos0role` | `number` | `DBOFIELDTYPE_INTEGER` | `zNhB` | 16 | 0 | 60000 |  |
| `pos10role` | `number` | `DBOFIELDTYPE_INTEGER` | `qaaV` | 16 | 0 | 60000 |  |
| `pos1role` | `number` | `DBOFIELDTYPE_INTEGER` | `itIV` | 16 | 0 | 60000 |  |
| `pos2role` | `number` | `DBOFIELDTYPE_INTEGER` | `dxGV` | 16 | 0 | 60000 |  |
| `pos3role` | `number` | `DBOFIELDTYPE_INTEGER` | `kFjd` | 16 | 0 | 60000 |  |
| `pos4role` | `number` | `DBOFIELDTYPE_INTEGER` | `ClfN` | 16 | 0 | 60000 |  |
| `pos5role` | `number` | `DBOFIELDTYPE_INTEGER` | `DRSl` | 16 | 0 | 60000 |  |
| `pos6role` | `number` | `DBOFIELDTYPE_INTEGER` | `MZIF` | 16 | 0 | 60000 |  |
| `pos7role` | `number` | `DBOFIELDTYPE_INTEGER` | `VhxR` | 16 | 0 | 60000 |  |
| `pos8role` | `number` | `DBOFIELDTYPE_INTEGER` | `vJyM` | 16 | 0 | 60000 |  |
| `pos9role` | `number` | `DBOFIELDTYPE_INTEGER` | `mdLk` | 16 | 0 | 60000 |  |
| `position0` | `number` | `DBOFIELDTYPE_INTEGER` | `ZzVx` | 1 | 0 | 1 |  |
| `position1` | `number` | `DBOFIELDTYPE_INTEGER` | `CEZz` | 5 | 1 | 32 |  |
| `position10` | `number` | `DBOFIELDTYPE_INTEGER` | `FuLD` | 5 | 1 | 32 |  |
| `position2` | `number` | `DBOFIELDTYPE_INTEGER` | `nNch` | 5 | 1 | 32 |  |
| `position3` | `number` | `DBOFIELDTYPE_INTEGER` | `cGsr` | 5 | 1 | 32 |  |
| `position4` | `number` | `DBOFIELDTYPE_INTEGER` | `aCho` | 5 | 1 | 32 |  |
| `position5` | `number` | `DBOFIELDTYPE_INTEGER` | `BBlW` | 5 | 1 | 32 |  |
| `position6` | `number` | `DBOFIELDTYPE_INTEGER` | `ksMI` | 5 | 1 | 32 |  |
| `position7` | `number` | `DBOFIELDTYPE_INTEGER` | `fvcy` | 5 | 1 | 32 |  |
| `position8` | `number` | `DBOFIELDTYPE_INTEGER` | `TMpL` | 5 | 1 | 32 |  |
| `position9` | `number` | `DBOFIELDTYPE_INTEGER` | `sPtx` | 5 | 1 | 32 |  |
| `relativeformationid` | `number` | `DBOFIELDTYPE_INTEGER` | `eDrl` | 10 | -1 | 1000 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |

## temp_players

Binary code: `HvYq`. Record type: `Fc27Record<'temp_players', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 8 | 0 | 255 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 8 | 0 | 255 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 8 | 0 | 255 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 8 | 0 | 255 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `animfreekickstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `jLuE` | 5 | 0 | 31 |  |
| `animpenaltiesstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `naby` | 5 | 0 | 31 |  |
| `avatarpomid` | `number` | `DBOFIELDTYPE_INTEGER` | `VRvd` | 9 | 0 | 511 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `commonnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `HDYx` | 16 | 0 | 53500 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `contractvaliduntil` | `number` | `DBOFIELDTYPE_INTEGER` | `qvmK` | 7 | 2000 | 2120 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `defspe` | `number` | `DBOFIELDTYPE_INTEGER` | `aEqa` | 7 | 0 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `driref` | `number` | `DBOFIELDTYPE_INTEGER` | `zNYP` | 7 | 0 | 99 |  |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 1 | 5 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `finishingcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `GFLI` | 17 | 0 | 100000 |  |
| `finishingcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `LwOe` | 17 | 0 | 100000 |  |
| `firstnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `tHlO` | 16 | 0 | 53500 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkglovetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `GReX` | 10 | 0 | 1023 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkkickstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `rJqp` | 2 | 0 | 3 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `gksavetype` | `number` | `DBOFIELDTYPE_INTEGER` | `SJED` | 1 | 0 | 1 |  |
| `growthprofile` | `number` | `DBOFIELDTYPE_INTEGER` | `OwTX` | 4 | 0 | 8 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `hasseasonaljersey` | `number` | `DBOFIELDTYPE_INTEGER` | `iCDR` | 3 | 0 | 7 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 220 |  |
| `icontrait1` | `number` | `DBOFIELDTYPE_INTEGER` | `OjQY` | 30 | 0 | 1073741823 |  |
| `icontrait2` | `number` | `DBOFIELDTYPE_INTEGER` | `PqtG` | 17 | 0 | 131071 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `internationalrep` | `number` | `DBOFIELDTYPE_INTEGER` | `WVsa` | 3 | 1 | 5 |  |
| `iscustomized` | `number` | `DBOFIELDTYPE_INTEGER` | `Oirg` | 1 | 0 | 1 |  |
| `isretiring` | `number` | `DBOFIELDTYPE_INTEGER` | `kvuF` | 1 | 0 | 1 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 2 | 0 | 2 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `jerseystylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `miIB` | 1 | 0 | 1 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `lastnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `QCfa` | 16 | 0 | 53500 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `modifier` | `number` | `DBOFIELDTYPE_INTEGER` | `isYi` | 4 | -5 | 5 |  |
| `muscularitycode` | `number` | `DBOFIELDTYPE_INTEGER` | `MUYu` | 1 | 0 | 1 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 1 | 99 |  |
| `pacdiv` | `number` | `DBOFIELDTYPE_INTEGER` | `aapy` | 7 | 0 | 99 |  |
| `paskic` | `number` | `DBOFIELDTYPE_INTEGER` | `ceRf` | 7 | 0 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `personality` | `number` | `DBOFIELDTYPE_INTEGER` | `hxxo` | 3 | 1 | 5 |  |
| `phypos` | `number` | `DBOFIELDTYPE_INTEGER` | `hdMV` | 7 | 0 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `playerjerseynameid` | `number` | `DBOFIELDTYPE_INTEGER` | `Vqpv` | 16 | 0 | 53500 |  |
| `playerjointeamdate` | `number` | `DBOFIELDTYPE_DATE` | `vTpl` | 20 | 0 | 1048575 |  |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `preferredfoot` | `number` | `DBOFIELDTYPE_INTEGER` | `MDvm` | 1 | 1 | 2 |  |
| `preferredposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `wZQU` | 5 | 0 | 31 |  |
| `preferredposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `NgVS` | 6 | -1 | 32 |  |
| `preferredposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `OblE` | 6 | -1 | 32 |  |
| `preferredposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `YnYz` | 6 | -1 | 32 |  |
| `preferredposition5` | `number` | `DBOFIELDTYPE_INTEGER` | `rkcN` | 6 | -1 | 32 |  |
| `preferredposition6` | `number` | `DBOFIELDTYPE_INTEGER` | `GdFb` | 6 | -1 | 32 |  |
| `preferredposition7` | `number` | `DBOFIELDTYPE_INTEGER` | `VeVh` | 6 | -1 | 32 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `releaseclause` | `number` | `DBOFIELDTYPE_INTEGER` | `pSzm` | 30 | 0 | 1000000000 |  |
| `role1` | `number` | `DBOFIELDTYPE_INTEGER` | `FYhg` | 8 | 0 | 199 |  |
| `role2` | `number` | `DBOFIELDTYPE_INTEGER` | `ERce` | 8 | 0 | 199 |  |
| `role3` | `number` | `DBOFIELDTYPE_INTEGER` | `HSMQ` | 8 | 0 | 199 |  |
| `role4` | `number` | `DBOFIELDTYPE_INTEGER` | `hGZL` | 8 | 0 | 199 |  |
| `role5` | `number` | `DBOFIELDTYPE_INTEGER` | `yNVZ` | 8 | 0 | 199 |  |
| `role6` | `number` | `DBOFIELDTYPE_INTEGER` | `zUsn` | 8 | 0 | 199 |  |
| `role7` | `number` | `DBOFIELDTYPE_INTEGER` | `MPct` | 8 | 0 | 199 |  |
| `role8` | `number` | `DBOFIELDTYPE_INTEGER` | `YsBk` | 8 | 0 | 199 |  |
| `role9` | `number` | `DBOFIELDTYPE_INTEGER` | `rnxu` | 8 | 0 | 199 |  |
| `runningcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `ZeVz` | 17 | 0 | 100000 |  |
| `runningcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `oXYh` | 17 | 0 | 100000 |  |
| `runstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Tbvt` | 6 | 0 | 32 |  |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 |  |
| `shohan` | `number` | `DBOFIELDTYPE_INTEGER` | `NTFr` | 7 | 0 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skillmoves` | `number` | `DBOFIELDTYPE_INTEGER` | `BAPc` | 3 | 0 | 4 |  |
| `skillmoveslikelihood` | `number` | `DBOFIELDTYPE_INTEGER` | `PJsq` | 3 | 0 | 4 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 11 | 0 | 2047 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 10 | 0 | 1023 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 10 | 0 | 1023 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 10 | 0 | 1023 |  |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 10 | 0 | 1023 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 10 | 0 | 1023 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 10 | 0 | 1023 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 10 | 0 | 1023 |  |
| `trait1` | `number` | `DBOFIELDTYPE_INTEGER` | `juxV` | 30 | 0 | 1073741823 |  |
| `trait2` | `number` | `DBOFIELDTYPE_INTEGER` | `inAr` | 17 | 0 | 131071 |  |
| `undershortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `KCeP` | 1 | 0 | 1 |  |
| `usercaneditname` | `number` | `DBOFIELDTYPE_INTEGER` | `NBsd` | 1 | 0 | 1 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |
| `wage` | `number` | `DBOFIELDTYPE_INTEGER` | `cmGX` | 27 | 0 | 100000000 |  |
| `weakfootabilitytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `aOBn` | 3 | 1 | 5 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 150 |  |

## temp_teamplayerlinks

Binary code: `cMPf`. Record type: `Fc27Record<'temp_teamplayerlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 19 | 0 | 300000 | Yes |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 3 | 0 | 5 |  |
| `injury` | `number` | `DBOFIELDTYPE_INTEGER` | `Vili` | 6 | 0 | 35 |  |
| `isamongtopscorers` | `number` | `DBOFIELDTYPE_INTEGER` | `SuuG` | 1 | 0 | 1 |  |
| `isamongtopscorersinteam` | `number` | `DBOFIELDTYPE_INTEGER` | `pchV` | 1 | 0 | 1 |  |
| `istopscorer` | `number` | `DBOFIELDTYPE_INTEGER` | `YbEm` | 1 | 0 | 1 |  |
| `jerseynumber` | `number` | `DBOFIELDTYPE_INTEGER` | `JFiY` | 7 | 1 | 99 |  |
| `leagueappearances` | `number` | `DBOFIELDTYPE_INTEGER` | `stFk` | 6 | 0 | 50 |  |
| `leaguegoals` | `number` | `DBOFIELDTYPE_INTEGER` | `UMDX` | 8 | 0 | 200 |  |
| `leaguegoalsprevmatch` | `number` | `DBOFIELDTYPE_INTEGER` | `NbFh` | 4 | 0 | 10 |  |
| `leaguegoalsprevthreematches` | `number` | `DBOFIELDTYPE_INTEGER` | `dGNm` | 5 | 0 | 25 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 |  |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 6 | 0 | 33 |  |
| `reds` | `number` | `DBOFIELDTYPE_INTEGER` | `jIcz` | 5 | 0 | 20 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 |  |
| `yellows` | `number` | `DBOFIELDTYPE_INTEGER` | `jtWI` | 6 | 0 | 40 |  |

## temp_teams

Binary code: `FlJM`. Record type: `Fc27Record<'temp_teams', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 32 | -2147483648 | 2147483647 |  |
| `attackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UAKP` | 7 | 0 | 99 |  |
| `ballid` | `number` | `DBOFIELDTYPE_INTEGER` | `pxes` | 11 | -1 | 1023 |  |
| `buildupplay` | `number` | `DBOFIELDTYPE_INTEGER` | `mIWR` | 2 | 0 | 3 |  |
| `captainid` | `number` | `DBOFIELDTYPE_INTEGER` | `FVzk` | 19 | -1 | 500000 |  |
| `cityid` | `number` | `DBOFIELDTYPE_INTEGER` | `pNIL` | 10 | 0 | 1023 |  |
| `cksupport1` | `number` | `DBOFIELDTYPE_INTEGER` | `tFoZ` | 19 | 0 | 500000 |  |
| `cksupport2` | `number` | `DBOFIELDTYPE_INTEGER` | `cwNn` | 19 | 0 | 500000 |  |
| `cksupport3` | `number` | `DBOFIELDTYPE_INTEGER` | `nzJx` | 19 | 0 | 500000 |  |
| `cksupport4` | `number` | `DBOFIELDTYPE_INTEGER` | `pbQy` | 19 | 0 | 500000 |  |
| `cksupport5` | `number` | `DBOFIELDTYPE_INTEGER` | `mgAw` | 19 | 0 | 500000 |  |
| `cksupport6` | `number` | `DBOFIELDTYPE_INTEGER` | `XpxO` | 19 | 0 | 500000 |  |
| `cksupport7` | `number` | `DBOFIELDTYPE_INTEGER` | `sitE` | 19 | 0 | 500000 |  |
| `cksupport8` | `number` | `DBOFIELDTYPE_INTEGER` | `gZYN` | 19 | 0 | 500000 |  |
| `cksupport9` | `number` | `DBOFIELDTYPE_INTEGER` | `fSIH` | 19 | 0 | 500000 |  |
| `clubworth` | `number` | `DBOFIELDTYPE_INTEGER` | `QSnJ` | 24 | 0 | 9999999 |  |
| `cornerflagpolecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `tYEa` | 5 | 0 | 20 |  |
| `crowdregion` | `number` | `DBOFIELDTYPE_INTEGER` | `Edjp` | 5 | 0 | 31 |  |
| `crowdskintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `KvHw` | 7 | 0 | 100 |  |
| `defenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `btsS` | 7 | 0 | 99 |  |
| `defensivedepth` | `number` | `DBOFIELDTYPE_INTEGER` | `nXaF` | 7 | 1 | 100 |  |
| `domesticcups` | `number` | `DBOFIELDTYPE_INTEGER` | `zqra` | 10 | 0 | 1023 |  |
| `domesticprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `ppLE` | 5 | 0 | 20 |  |
| `ethnicity` | `number` | `DBOFIELDTYPE_INTEGER` | `aArc` | 4 | 1 | 11 |  |
| `favoriteteamsheetid` | `number` | `DBOFIELDTYPE_INTEGER` | `PccS` | 10 | -1 | 1000 |  |
| `flamethrowercannon` | `number` | `DBOFIELDTYPE_INTEGER` | `pqZD` | 3 | 0 | 4 |  |
| `form` | `number` | `DBOFIELDTYPE_INTEGER` | `rLZx` | 7 | 0 | 100 |  |
| `foundationyear` | `number` | `DBOFIELDTYPE_INTEGER` | `yDDQ` | 8 | 1800 | 2050 |  |
| `freekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `LfBw` | 19 | -1 | 500000 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 2 | 0 | 2 |  |
| `genericbanner` | `number` | `DBOFIELDTYPE_INTEGER` | `jfmo` | 1 | 0 | 1 |  |
| `genericint1` | `number` | `DBOFIELDTYPE_INTEGER` | `NSMy` | 7 | -1 | 100 |  |
| `genericint2` | `number` | `DBOFIELDTYPE_INTEGER` | `MLlE` | 7 | -1 | 100 |  |
| `goalnetstanchioncolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `Tnbc` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `PNLv` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `WELo` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `gCAn` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `oEoM` | 8 | 0 | 255 |  |
| `goalnetstanchioncolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `BZQX` | 8 | 0 | 255 |  |
| `haslargeflag` | `number` | `DBOFIELDTYPE_INTEGER` | `QgOx` | 2 | 0 | 2 |  |
| `hasstandingcrowd` | `number` | `DBOFIELDTYPE_INTEGER` | `NOYS` | 2 | 0 | 3 |  |
| `hassubstitutionboard` | `number` | `DBOFIELDTYPE_INTEGER` | `kfND` | 1 | 0 | 1 |  |
| `hassuncanthem` | `number` | `DBOFIELDTYPE_INTEGER` | `sqra` | 1 | 0 | 1 |  |
| `hastifo` | `number` | `DBOFIELDTYPE_INTEGER` | `BdXK` | 2 | 0 | 2 |  |
| `hasvikingclap` | `number` | `DBOFIELDTYPE_INTEGER` | `VsCG` | 1 | 0 | 1 |  |
| `internationalprestige` | `number` | `DBOFIELDTYPE_INTEGER` | `edvw` | 5 | 0 | 20 |  |
| `isbannerenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `uhiM` | 2 | 0 | 2 |  |
| `iscompetitioncrowdcardsenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `FtgW` | 2 | 0 | 3 |  |
| `iscompetitionpoleflagenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `eLCT` | 2 | 0 | 2 |  |
| `iscompetitionscarfenabled` | `number` | `DBOFIELDTYPE_INTEGER` | `VtHL` | 2 | 0 | 2 |  |
| `jerseytype` | `number` | `DBOFIELDTYPE_INTEGER` | `zgDG` | 2 | 0 | 2 |  |
| `latitude` | `number` | `DBOFIELDTYPE_INTEGER` | `sjQg` | 8 | -90 | 90 |  |
| `leaguetitles` | `number` | `DBOFIELDTYPE_INTEGER` | `cpXo` | 10 | 0 | 1023 |  |
| `leftcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `xcde` | 19 | -1 | 500000 |  |
| `leftfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WLKn` | 19 | -1 | 500000 |  |
| `longitude` | `number` | `DBOFIELDTYPE_INTEGER` | `NQXQ` | 9 | -180 | 180 |  |
| `longkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `WiRV` | 19 | -1 | 500000 |  |
| `matchdayattackrating` | `number` | `DBOFIELDTYPE_INTEGER` | `jmRz` | 7 | 0 | 99 |  |
| `matchdaydefenserating` | `number` | `DBOFIELDTYPE_INTEGER` | `zHfR` | 7 | 0 | 99 |  |
| `matchdaymidfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `HHDP` | 7 | 0 | 99 |  |
| `matchdayoverallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `sqCP` | 7 | 0 | 99 |  |
| `midfieldrating` | `number` | `DBOFIELDTYPE_INTEGER` | `SqFN` | 7 | 0 | 99 |  |
| `numtransfersin` | `number` | `DBOFIELDTYPE_INTEGER` | `Gjri` | 5 | 0 | 31 |  |
| `opponentstrongthreshold` | `number` | `DBOFIELDTYPE_INTEGER` | `MQCj` | 8 | -100 | 100 |  |
| `opponentweakthreshold` | `number` | `DBOFIELDTYPE_INTEGER` | `Umue` | 8 | -100 | 100 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 0 | 99 |  |
| `penaltytakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `hPku` | 19 | -1 | 500000 |  |
| `personalityid` | `number` | `DBOFIELDTYPE_INTEGER` | `IIKl` | 2 | 0 | 2 |  |
| `pitchcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `lzGH` | 4 | 0 | 10 |  |
| `pitchlinecolor` | `number` | `DBOFIELDTYPE_INTEGER` | `IOSv` | 4 | 0 | 10 |  |
| `pitchwear` | `number` | `DBOFIELDTYPE_INTEGER` | `kjiI` | 4 | 0 | 10 |  |
| `playsurfacetype` | `number` | `DBOFIELDTYPE_INTEGER` | `vFwL` | 3 | 0 | 7 |  |
| `popularity` | `number` | `DBOFIELDTYPE_INTEGER` | `FcOK` | 4 | 0 | 10 |  |
| `powid` | `number` | `DBOFIELDTYPE_INTEGER` | `MbYC` | 15 | -1 | 32000 |  |
| `presassetone` | `number` | `DBOFIELDTYPE_INTEGER` | `TdUB` | 1 | 0 | 1 |  |
| `presassettwo` | `number` | `DBOFIELDTYPE_INTEGER` | `UjYK` | 2 | 0 | 3 |  |
| `prev_el_champ` | `number` | `DBOFIELDTYPE_INTEGER` | `YTAn` | 1 | 0 | 1 |  |
| `profitability` | `number` | `DBOFIELDTYPE_INTEGER` | `hXEu` | 4 | 0 | 10 |  |
| `rightcornerkicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `fBiX` | 19 | -1 | 500000 |  |
| `rightfreekicktakerid` | `number` | `DBOFIELDTYPE_INTEGER` | `TxVD` | 19 | -1 | 500000 |  |
| `rivalteam` | `number` | `DBOFIELDTYPE_INTEGER` | `erSL` | 18 | 1 | 200000 |  |
| `skinnyflags` | `number` | `DBOFIELDTYPE_INTEGER` | `WwbT` | 1 | 0 | 1 |  |
| `stadiumgoalnetpattern` | `number` | `DBOFIELDTYPE_INTEGER` | `LOZj` | 1 | 0 | 1 |  |
| `stadiumgoalnetstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `CauK` | 6 | 0 | 63 |  |
| `stadiummowpattern_code` | `number` | `DBOFIELDTYPE_INTEGER` | `dUTO` | 5 | 0 | 17 |  |
| `stanchionflamethrower` | `number` | `DBOFIELDTYPE_INTEGER` | `XDPj` | 2 | 0 | 2 |  |
| `teamcolor1b` | `number` | `DBOFIELDTYPE_INTEGER` | `EVjc` | 8 | 0 | 255 |  |
| `teamcolor1g` | `number` | `DBOFIELDTYPE_INTEGER` | `UrDD` | 8 | 0 | 255 |  |
| `teamcolor1r` | `number` | `DBOFIELDTYPE_INTEGER` | `lWTE` | 8 | 0 | 255 |  |
| `teamcolor2b` | `number` | `DBOFIELDTYPE_INTEGER` | `PcIL` | 8 | 0 | 255 |  |
| `teamcolor2g` | `number` | `DBOFIELDTYPE_INTEGER` | `rags` | 8 | 0 | 255 |  |
| `teamcolor2r` | `number` | `DBOFIELDTYPE_INTEGER` | `KzYP` | 8 | 0 | 255 |  |
| `teamcolor3b` | `number` | `DBOFIELDTYPE_INTEGER` | `Gzty` | 8 | 0 | 255 |  |
| `teamcolor3g` | `number` | `DBOFIELDTYPE_INTEGER` | `Olxh` | 8 | 0 | 255 |  |
| `teamcolor3r` | `number` | `DBOFIELDTYPE_INTEGER` | `Tsda` | 8 | 0 | 255 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 18 | -1 | 200000 | Yes |
| `teamname` | `string` | `DBOFIELDTYPE_STRING` | `AUsv` | 480 | 0 | 0 |  |
| `teamstadiumcapacity` | `number` | `DBOFIELDTYPE_INTEGER` | `TehK` | 20 | 0 | 999999 |  |
| `throwerleft` | `number` | `DBOFIELDTYPE_INTEGER` | `xPHY` | 19 | 0 | 500000 |  |
| `throwerright` | `number` | `DBOFIELDTYPE_INTEGER` | `Uwwk` | 19 | 0 | 500000 |  |
| `trainingstadium` | `number` | `DBOFIELDTYPE_INTEGER` | `WvVx` | 11 | 0 | 2000 |  |
| `trait1vequal` | `number` | `DBOFIELDTYPE_INTEGER` | `TPvg` | 23 | 0 | 8388607 |  |
| `trait1vstrong` | `number` | `DBOFIELDTYPE_INTEGER` | `aDMz` | 23 | 0 | 8388607 |  |
| `trait1vweak` | `number` | `DBOFIELDTYPE_INTEGER` | `kzMW` | 23 | 0 | 8388607 |  |
| `uefa_cl_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `hJha` | 9 | 0 | 256 |  |
| `uefa_consecutive_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `ZKAU` | 9 | 0 | 256 |  |
| `uefa_el_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `yhYg` | 9 | 0 | 256 |  |
| `uefa_uecl_wins` | `number` | `DBOFIELDTYPE_INTEGER` | `igKs` | 9 | 0 | 256 |  |
| `utcoffset` | `number` | `DBOFIELDTYPE_INTEGER` | `Csgu` | 5 | -12 | 13 |  |
| `youthdevelopment` | `number` | `DBOFIELDTYPE_INTEGER` | `HNrf` | 4 | 0 | 10 |  |

## tifo

Binary code: `tWYe`. Record type: `Fc27Record<'tifo', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assetid` | `number` | `DBOFIELDTYPE_INTEGER` | `yeEP` | 24 | 0 | 9999999 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 11 | -1 | 1300 | Yes |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |
| `teamid` | `number` | `DBOFIELDTYPE_INTEGER` | `mCXg` | 24 | 0 | 9999999 |  |
| `type` | `number` | `DBOFIELDTYPE_INTEGER` | `ZpXz` | 10 | 0 | 1000 |  |

## trainingteamplayerlinks

Binary code: `uvKl`. Record type: `Fc27Record<'trainingteamplayerlinks', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `jerseynumber` | `number` | `DBOFIELDTYPE_INTEGER` | `JFiY` | 7 | 1 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 6 | 0 | 33 |  |

## trainingteamplayernames

Binary code: `RWuR`. Record type: `Fc27Record<'trainingteamplayernames', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `commentaryid` | `number` | `DBOFIELDTYPE_INTEGER` | `RkEp` | 16 | 900000 | 965000 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 608 | 0 | 0 |  |
| `nameid` | `number` | `DBOFIELDTYPE_INTEGER` | `FuiB` | 16 | 0 | 45999 | Yes |

## trainingteamplayers

Binary code: `JOhL`. Record type: `Fc27Record<'trainingteamplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `acceleration` | `number` | `DBOFIELDTYPE_INTEGER` | `SPge` | 7 | 1 | 99 |  |
| `accessorycode1` | `number` | `DBOFIELDTYPE_INTEGER` | `gOol` | 11 | 0 | 2000 |  |
| `accessorycode2` | `number` | `DBOFIELDTYPE_INTEGER` | `dXNv` | 11 | 0 | 2000 |  |
| `accessorycode3` | `number` | `DBOFIELDTYPE_INTEGER` | `ycJN` | 11 | 0 | 2000 |  |
| `accessorycode4` | `number` | `DBOFIELDTYPE_INTEGER` | `oQQC` | 11 | 0 | 2000 |  |
| `accessorycolourcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `kmkN` | 8 | 0 | 255 |  |
| `accessorycolourcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `Bfhz` | 8 | 0 | 255 |  |
| `accessorycolourcode3` | `number` | `DBOFIELDTYPE_INTEGER` | `acRl` | 8 | 0 | 255 |  |
| `accessorycolourcode4` | `number` | `DBOFIELDTYPE_INTEGER` | `cAUq` | 8 | 0 | 255 |  |
| `aggression` | `number` | `DBOFIELDTYPE_INTEGER` | `iTce` | 7 | 1 | 99 |  |
| `agility` | `number` | `DBOFIELDTYPE_INTEGER` | `RRQB` | 7 | 1 | 99 |  |
| `animfreekickstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `jLuE` | 5 | 0 | 31 |  |
| `animpenaltiesstartposcode` | `number` | `DBOFIELDTYPE_INTEGER` | `naby` | 5 | 0 | 31 |  |
| `avatarpomid` | `number` | `DBOFIELDTYPE_INTEGER` | `VRvd` | 9 | 0 | 511 |  |
| `balance` | `number` | `DBOFIELDTYPE_INTEGER` | `onkY` | 7 | 1 | 99 |  |
| `ballcontrol` | `number` | `DBOFIELDTYPE_INTEGER` | `MgwU` | 7 | 1 | 99 |  |
| `birthdate` | `number` | `DBOFIELDTYPE_DATE` | `WVIU` | 20 | 0 | 1048575 |  |
| `bodytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `xWyx` | 9 | 1 | 512 |  |
| `commonnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `HDYx` | 16 | 0 | 53500 |  |
| `composure` | `number` | `DBOFIELDTYPE_INTEGER` | `jlQJ` | 7 | 1 | 99 |  |
| `contractvaliduntil` | `number` | `DBOFIELDTYPE_INTEGER` | `qvmK` | 7 | 2000 | 2120 |  |
| `crossing` | `number` | `DBOFIELDTYPE_INTEGER` | `wGOH` | 7 | 1 | 99 |  |
| `curve` | `number` | `DBOFIELDTYPE_INTEGER` | `YFaA` | 7 | 1 | 99 |  |
| `defensiveawareness` | `number` | `DBOFIELDTYPE_INTEGER` | `SJKz` | 7 | 1 | 99 |  |
| `defspe` | `number` | `DBOFIELDTYPE_INTEGER` | `aEqa` | 7 | 0 | 99 |  |
| `dribbling` | `number` | `DBOFIELDTYPE_INTEGER` | `nEbM` | 7 | 1 | 99 |  |
| `driref` | `number` | `DBOFIELDTYPE_INTEGER` | `zNYP` | 7 | 0 | 99 |  |
| `emotion` | `number` | `DBOFIELDTYPE_INTEGER` | `gNbt` | 3 | 1 | 5 |  |
| `eyebrowcode` | `number` | `DBOFIELDTYPE_INTEGER` | `HqUh` | 24 | 0 | 9999999 |  |
| `eyecolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `Zufj` | 6 | 1 | 64 |  |
| `eyedetail` | `number` | `DBOFIELDTYPE_INTEGER` | `lVDX` | 5 | 0 | 20 |  |
| `faceposerpreset` | `number` | `DBOFIELDTYPE_INTEGER` | `qwYd` | 4 | 0 | 15 |  |
| `facepsdlayer0` | `number` | `DBOFIELDTYPE_INTEGER` | `aBrD` | 4 | 0 | 15 |  |
| `facepsdlayer1` | `number` | `DBOFIELDTYPE_INTEGER` | `luvt` | 4 | 0 | 15 |  |
| `facialhaircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `mIlz` | 6 | 0 | 50 |  |
| `facialhairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `onGA` | 10 | 0 | 512 |  |
| `finishing` | `number` | `DBOFIELDTYPE_INTEGER` | `xJZL` | 7 | 1 | 99 |  |
| `finishingcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `GFLI` | 17 | 0 | 100000 |  |
| `finishingcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `LwOe` | 17 | 0 | 100000 |  |
| `firstnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `tHlO` | 16 | 0 | 53500 |  |
| `freekickaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `VgKc` | 7 | 1 | 99 |  |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `gkdiving` | `number` | `DBOFIELDTYPE_INTEGER` | `xrSG` | 7 | 1 | 99 |  |
| `gkglovetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `GReX` | 10 | 0 | 1023 |  |
| `gkhandling` | `number` | `DBOFIELDTYPE_INTEGER` | `GBGj` | 7 | 1 | 99 |  |
| `gkkicking` | `number` | `DBOFIELDTYPE_INTEGER` | `kqda` | 7 | 1 | 99 |  |
| `gkkickstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `rJqp` | 2 | 0 | 3 |  |
| `gkpositioning` | `number` | `DBOFIELDTYPE_INTEGER` | `yfhq` | 7 | 1 | 99 |  |
| `gkreflexes` | `number` | `DBOFIELDTYPE_INTEGER` | `eYFI` | 7 | 1 | 99 |  |
| `gksavetype` | `number` | `DBOFIELDTYPE_INTEGER` | `SJED` | 1 | 0 | 1 |  |
| `growthprofile` | `number` | `DBOFIELDTYPE_INTEGER` | `OwTX` | 4 | 0 | 8 |  |
| `haircolorcode` | `number` | `DBOFIELDTYPE_INTEGER` | `uGEA` | 6 | 0 | 50 |  |
| `hairstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OFRx` | 5 | 0 | 31 |  |
| `hairtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `CkYD` | 14 | 0 | 10000 |  |
| `hashighqualityhead` | `number` | `DBOFIELDTYPE_INTEGER` | `ykrW` | 1 | 0 | 1 |  |
| `hasseasonaljersey` | `number` | `DBOFIELDTYPE_INTEGER` | `iCDR` | 3 | 0 | 7 |  |
| `headassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `GEba` | 19 | 0 | 500000 |  |
| `headclasscode` | `number` | `DBOFIELDTYPE_INTEGER` | `HvCm` | 2 | 0 | 2 |  |
| `headingaccuracy` | `number` | `DBOFIELDTYPE_INTEGER` | `aReg` | 7 | 1 | 99 |  |
| `headtypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `OoQO` | 14 | 0 | 16000 |  |
| `headvariation` | `number` | `DBOFIELDTYPE_INTEGER` | `pHkq` | 5 | 0 | 31 |  |
| `height` | `number` | `DBOFIELDTYPE_INTEGER` | `ypBQ` | 7 | 130 | 220 |  |
| `icontrait1` | `number` | `DBOFIELDTYPE_INTEGER` | `OjQY` | 30 | 0 | 1073741823 |  |
| `icontrait2` | `number` | `DBOFIELDTYPE_INTEGER` | `PqtG` | 17 | 0 | 131071 |  |
| `interceptions` | `number` | `DBOFIELDTYPE_INTEGER` | `wWzG` | 7 | 1 | 99 |  |
| `internationalrep` | `number` | `DBOFIELDTYPE_INTEGER` | `WVsa` | 3 | 1 | 5 |  |
| `iscustomized` | `number` | `DBOFIELDTYPE_INTEGER` | `Oirg` | 1 | 0 | 1 |  |
| `isretiring` | `number` | `DBOFIELDTYPE_INTEGER` | `kvuF` | 1 | 0 | 1 |  |
| `jerseyfit` | `number` | `DBOFIELDTYPE_INTEGER` | `lTKv` | 2 | 0 | 2 |  |
| `jerseysleevelengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `UFvj` | 3 | 0 | 7 |  |
| `jerseystylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `miIB` | 1 | 0 | 1 |  |
| `jumping` | `number` | `DBOFIELDTYPE_INTEGER` | `URGo` | 7 | 1 | 99 |  |
| `lastnameid` | `number` | `DBOFIELDTYPE_INTEGER` | `QCfa` | 16 | 0 | 53500 |  |
| `lipcolor` | `number` | `DBOFIELDTYPE_INTEGER` | `KpQF` | 7 | 0 | 100 |  |
| `longpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `kerE` | 7 | 1 | 99 |  |
| `longshots` | `number` | `DBOFIELDTYPE_INTEGER` | `CsBG` | 7 | 1 | 99 |  |
| `modifier` | `number` | `DBOFIELDTYPE_INTEGER` | `isYi` | 4 | -5 | 5 |  |
| `muscularitycode` | `number` | `DBOFIELDTYPE_INTEGER` | `MUYu` | 1 | 0 | 1 |  |
| `nationality` | `number` | `DBOFIELDTYPE_INTEGER` | `enmm` | 12 | 0 | 3000 |  |
| `overallrating` | `number` | `DBOFIELDTYPE_INTEGER` | `UERs` | 7 | 1 | 99 |  |
| `pacdiv` | `number` | `DBOFIELDTYPE_INTEGER` | `aapy` | 7 | 0 | 99 |  |
| `paskic` | `number` | `DBOFIELDTYPE_INTEGER` | `ceRf` | 7 | 0 | 99 |  |
| `penalties` | `number` | `DBOFIELDTYPE_INTEGER` | `AGsE` | 7 | 1 | 99 |  |
| `personality` | `number` | `DBOFIELDTYPE_INTEGER` | `hxxo` | 3 | 1 | 5 |  |
| `phypos` | `number` | `DBOFIELDTYPE_INTEGER` | `hdMV` | 7 | 0 | 99 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `playerjerseynameid` | `number` | `DBOFIELDTYPE_INTEGER` | `Vqpv` | 16 | 0 | 53500 |  |
| `playerjointeamdate` | `number` | `DBOFIELDTYPE_DATE` | `vTpl` | 20 | 0 | 1048575 |  |
| `positioning` | `number` | `DBOFIELDTYPE_INTEGER` | `XsFD` | 7 | 1 | 99 |  |
| `potential` | `number` | `DBOFIELDTYPE_INTEGER` | `mpuH` | 7 | 1 | 99 |  |
| `preferredfoot` | `number` | `DBOFIELDTYPE_INTEGER` | `MDvm` | 1 | 1 | 2 |  |
| `preferredposition1` | `number` | `DBOFIELDTYPE_INTEGER` | `wZQU` | 5 | 0 | 31 |  |
| `preferredposition2` | `number` | `DBOFIELDTYPE_INTEGER` | `NgVS` | 6 | -1 | 32 |  |
| `preferredposition3` | `number` | `DBOFIELDTYPE_INTEGER` | `OblE` | 6 | -1 | 32 |  |
| `preferredposition4` | `number` | `DBOFIELDTYPE_INTEGER` | `YnYz` | 6 | -1 | 32 |  |
| `preferredposition5` | `number` | `DBOFIELDTYPE_INTEGER` | `rkcN` | 6 | -1 | 32 |  |
| `preferredposition6` | `number` | `DBOFIELDTYPE_INTEGER` | `GdFb` | 6 | -1 | 32 |  |
| `preferredposition7` | `number` | `DBOFIELDTYPE_INTEGER` | `VeVh` | 6 | -1 | 32 |  |
| `reactions` | `number` | `DBOFIELDTYPE_INTEGER` | `YCnI` | 7 | 1 | 99 |  |
| `releaseclause` | `number` | `DBOFIELDTYPE_INTEGER` | `pSzm` | 30 | 0 | 1000000000 |  |
| `role1` | `number` | `DBOFIELDTYPE_INTEGER` | `FYhg` | 8 | 0 | 199 |  |
| `role2` | `number` | `DBOFIELDTYPE_INTEGER` | `ERce` | 8 | 0 | 199 |  |
| `role3` | `number` | `DBOFIELDTYPE_INTEGER` | `HSMQ` | 8 | 0 | 199 |  |
| `role4` | `number` | `DBOFIELDTYPE_INTEGER` | `hGZL` | 8 | 0 | 199 |  |
| `role5` | `number` | `DBOFIELDTYPE_INTEGER` | `yNVZ` | 8 | 0 | 199 |  |
| `role6` | `number` | `DBOFIELDTYPE_INTEGER` | `zUsn` | 8 | 0 | 199 |  |
| `role7` | `number` | `DBOFIELDTYPE_INTEGER` | `MPct` | 8 | 0 | 199 |  |
| `role8` | `number` | `DBOFIELDTYPE_INTEGER` | `YsBk` | 8 | 0 | 199 |  |
| `role9` | `number` | `DBOFIELDTYPE_INTEGER` | `rnxu` | 8 | 0 | 199 |  |
| `runningcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `ZeVz` | 17 | 0 | 100000 |  |
| `runningcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `oXYh` | 17 | 0 | 100000 |  |
| `runstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Tbvt` | 6 | 0 | 32 |  |
| `shoecolorcode1` | `number` | `DBOFIELDTYPE_INTEGER` | `CSEx` | 5 | 0 | 31 |  |
| `shoecolorcode2` | `number` | `DBOFIELDTYPE_INTEGER` | `nbJH` | 5 | 0 | 31 |  |
| `shoedesigncode` | `number` | `DBOFIELDTYPE_INTEGER` | `PeUv` | 2 | 0 | 3 |  |
| `shoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tgwT` | 12 | 0 | 4095 |  |
| `shohan` | `number` | `DBOFIELDTYPE_INTEGER` | `NTFr` | 7 | 0 | 99 |  |
| `shortpassing` | `number` | `DBOFIELDTYPE_INTEGER` | `vObb` | 7 | 1 | 99 |  |
| `shortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `wwlr` | 1 | 0 | 1 |  |
| `shotpower` | `number` | `DBOFIELDTYPE_INTEGER` | `ohpV` | 7 | 1 | 99 |  |
| `sideburnscode` | `number` | `DBOFIELDTYPE_INTEGER` | `mrAn` | 2 | 0 | 3 |  |
| `skillmoves` | `number` | `DBOFIELDTYPE_INTEGER` | `BAPc` | 3 | 0 | 4 |  |
| `skillmoveslikelihood` | `number` | `DBOFIELDTYPE_INTEGER` | `PJsq` | 3 | 0 | 4 |  |
| `skincomplexion` | `number` | `DBOFIELDTYPE_INTEGER` | `wZAv` | 7 | 0 | 100 |  |
| `skinmakeup` | `number` | `DBOFIELDTYPE_INTEGER` | `eypU` | 7 | 0 | 100 |  |
| `skinsurfacepack` | `number` | `DBOFIELDTYPE_INTEGER` | `eyGK` | 18 | 100000 | 299999 |  |
| `skintonecode` | `number` | `DBOFIELDTYPE_INTEGER` | `ejir` | 7 | 0 | 100 |  |
| `skintypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `Dlgo` | 7 | 0 | 100 |  |
| `slidingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `PhuM` | 7 | 1 | 99 |  |
| `smallsidedshoetypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `iKqs` | 11 | 0 | 2047 |  |
| `socklengthcode` | `number` | `DBOFIELDTYPE_INTEGER` | `nVWW` | 3 | 0 | 4 |  |
| `sockstylecode` | `number` | `DBOFIELDTYPE_INTEGER` | `tKNk` | 4 | 0 | 8 |  |
| `sprintspeed` | `number` | `DBOFIELDTYPE_INTEGER` | `NrcP` | 7 | 1 | 99 |  |
| `stamina` | `number` | `DBOFIELDTYPE_INTEGER` | `XjDq` | 7 | 1 | 99 |  |
| `standingtackle` | `number` | `DBOFIELDTYPE_INTEGER` | `CsyD` | 7 | 1 | 99 |  |
| `strength` | `number` | `DBOFIELDTYPE_INTEGER` | `nmgT` | 7 | 1 | 99 |  |
| `tattooback` | `number` | `DBOFIELDTYPE_INTEGER` | `HEDC` | 10 | 0 | 1023 |  |
| `tattoofront` | `number` | `DBOFIELDTYPE_INTEGER` | `OnPm` | 10 | 0 | 1023 |  |
| `tattoohead` | `number` | `DBOFIELDTYPE_INTEGER` | `BhwR` | 10 | 0 | 1023 |  |
| `tattooleftarm` | `number` | `DBOFIELDTYPE_INTEGER` | `HfYD` | 10 | 0 | 1023 |  |
| `tattooleftleg` | `number` | `DBOFIELDTYPE_INTEGER` | `CVWU` | 10 | 0 | 1023 |  |
| `tattoorightarm` | `number` | `DBOFIELDTYPE_INTEGER` | `YjNY` | 10 | 0 | 1023 |  |
| `tattoorightleg` | `number` | `DBOFIELDTYPE_INTEGER` | `JRjz` | 10 | 0 | 1023 |  |
| `trait1` | `number` | `DBOFIELDTYPE_INTEGER` | `juxV` | 30 | 0 | 1073741823 |  |
| `trait2` | `number` | `DBOFIELDTYPE_INTEGER` | `inAr` | 17 | 0 | 131071 |  |
| `undershortstyle` | `number` | `DBOFIELDTYPE_INTEGER` | `KCeP` | 1 | 0 | 1 |  |
| `usercaneditname` | `number` | `DBOFIELDTYPE_INTEGER` | `NBsd` | 1 | 0 | 1 |  |
| `vision` | `number` | `DBOFIELDTYPE_INTEGER` | `ZoOK` | 7 | 1 | 99 |  |
| `volleys` | `number` | `DBOFIELDTYPE_INTEGER` | `Dydz` | 7 | 1 | 99 |  |
| `wage` | `number` | `DBOFIELDTYPE_INTEGER` | `cmGX` | 27 | 0 | 100000000 |  |
| `weakfootabilitytypecode` | `number` | `DBOFIELDTYPE_INTEGER` | `aOBn` | 3 | 1 | 5 |  |
| `weight` | `number` | `DBOFIELDTYPE_INTEGER` | `sNZW` | 7 | 30 | 150 |  |

## transfers

Binary code: `IrZL`. Record type: `Fc27Record<'transfers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `buyingteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `FgwP` | 18 | -1 | 200000 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `sellingteamid` | `number` | `DBOFIELDTYPE_INTEGER` | `FYuR` | 18 | -1 | 200000 |  |
| `transferamount` | `number` | `DBOFIELDTYPE_INTEGER` | `bMcu` | 30 | 1 | 900000000 |  |
| `transferdate` | `number` | `DBOFIELDTYPE_DATE` | `KShP` | 20 | 0 | 1048575 |  |

## turfattributesmap

Binary code: `kayb`. Record type: `Fc27Record<'turfattributesmap', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 8 | 0 | 210 | Yes |
| `attribute` | `number` | `DBOFIELDTYPE_INTEGER` | `KvvE` | 6 | -1 | 34 |  |
| `position` | `number` | `DBOFIELDTYPE_INTEGER` | `vjla` | 2 | 0 | 3 |  |
| `priority` | `number` | `DBOFIELDTYPE_INTEGER` | `LBdc` | 2 | 1 | 3 |  |
| `turf` | `number` | `DBOFIELDTYPE_INTEGER` | `fQtn` | 3 | 0 | 7 |  |

## turfsquadtypemap

Binary code: `HKnN`. Record type: `Fc27Record<'turfsquadtypemap', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 5 | 0 | 30 | Yes |
| `squadtype` | `number` | `DBOFIELDTYPE_INTEGER` | `DQkg` | 4 | 0 | 10 |  |
| `turf` | `number` | `DBOFIELDTYPE_INTEGER` | `fQtn` | 3 | 0 | 7 |  |

## ucc

Binary code: `QMqB`. Record type: `Fc27Record<'ucc', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `animationid` | `number` | `DBOFIELDTYPE_INTEGER` | `cveS` | 31 | 0 | 2147483647 |  |
| `playerid` | `number` | `DBOFIELDTYPE_INTEGER` | `ykFq` | 19 | -1 | 500000 | Yes |
| `probability` | `number \| null` | `DBOFIELDTYPE_REAL` | `eQzB` | 32 | 0 | 0 |  |
| `ucctype` | `number` | `DBOFIELDTYPE_INTEGER` | `uvPU` | 8 | 0 | 255 |  |

## vanitystoreitemlink

Binary code: `SizI`. Record type: `Fc27Record<'vanitystoreitemlink', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `assettype` | `number` | `DBOFIELDTYPE_INTEGER` | `jmFE` | 6 | 0 | 50 |  |
| `gameassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `mlkc` | 24 | 0 | 9000000 |  |
| `itemid` | `number` | `DBOFIELDTYPE_INTEGER` | `TsLM` | 19 | 0 | 500000 | Yes |
| `mode` | `number` | `DBOFIELDTYPE_INTEGER` | `yBnd` | 16 | 0 | 65535 |  |
| `primarycategoryid` | `number` | `DBOFIELDTYPE_INTEGER` | `DQZu` | 19 | 0 | 500000 |  |
| `secondarycategoryid` | `number` | `DBOFIELDTYPE_INTEGER` | `GuLi` | 19 | 0 | 500000 |  |
| `texturevariationid` | `number` | `DBOFIELDTYPE_INTEGER` | `nBFz` | 16 | 0 | 65535 |  |
| `tier` | `number` | `DBOFIELDTYPE_INTEGER` | `ZBjI` | 3 | 0 | 7 |  |

## version

Binary code: `DbIl`. Record type: `Fc27Record<'version', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 1 | 0 | 1 | Yes |
| `exportdate` | `number` | `DBOFIELDTYPE_DATE` | `ZwCP` | 20 | 0 | 1048575 |  |
| `isonline` | `number` | `DBOFIELDTYPE_INTEGER` | `RxIJ` | 1 | 0 | 1 |  |
| `major` | `number` | `DBOFIELDTYPE_INTEGER` | `moSi` | 16 | 1 | 65536 |  |
| `minor` | `number` | `DBOFIELDTYPE_INTEGER` | `YVuV` | 16 | 1 | 65536 |  |
| `schema` | `string` | `DBOFIELDTYPE_STRING` | `PyNp` | 320 | 0 | 0 |  |

## videos

Binary code: `aOcx`. Record type: `Fc27Record<'videos', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `artificialkey` | `number` | `DBOFIELDTYPE_INTEGER` | `JMld` | 7 | 0 | 100 | Yes |
| `countrycode` | `string` | `DBOFIELDTYPE_STRING` | `xciN` | 160 | 0 | 0 |  |
| `languagecode` | `string` | `DBOFIELDTYPE_STRING` | `fFjX` | 160 | 0 | 0 |  |
| `videoid` | `number` | `DBOFIELDTYPE_INTEGER` | `oNcV` | 3 | 0 | 4 |  |

## vipplayers

Binary code: `xscJ`. Record type: `Fc27Record<'vipplayers', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `gender` | `number` | `DBOFIELDTYPE_INTEGER` | `EveZ` | 1 | 0 | 1 |  |
| `headvar` | `number` | `DBOFIELDTYPE_INTEGER` | `PgcW` | 4 | 0 | 10 |  |
| `iselderly` | `number` | `DBOFIELDTYPE_INTEGER` | `xVSv` | 1 | 0 | 1 |  |
| `isplayer` | `number` | `DBOFIELDTYPE_INTEGER` | `TWcq` | 1 | 0 | 1 |  |
| `outfitid` | `number` | `DBOFIELDTYPE_INTEGER` | `CRrt` | 18 | -2 | 200000 |  |
| `playertechid` | `number` | `DBOFIELDTYPE_INTEGER` | `gDDc` | 19 | -2 | 500000 | Yes |
| `teamtechid` | `number` | `DBOFIELDTYPE_INTEGER` | `qljg` | 18 | -2 | 200000 |  |

## wardrobecloset

Binary code: `nhDP`. Record type: `Fc27Record<'wardrobecloset', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `clothingdescription` | `string` | `DBOFIELDTYPE_STRING` | `rBsK` | 600 | 0 | 0 |  |
| `clothingid` | `number` | `DBOFIELDTYPE_INTEGER` | `AGMs` | 20 | 0 | 600000 | Yes |
| `clothingtype` | `number` | `DBOFIELDTYPE_INTEGER` | `yPLv` | 5 | 0 | 16 |  |
| `colliderid` | `number` | `DBOFIELDTYPE_INTEGER` | `dtkt` | 7 | 0 | 64 |  |
| `isavailableincustomizationmenu` | `number` | `DBOFIELDTYPE_INTEGER` | `Ezfc` | 1 | 0 | 1 |  |
| `isavailableinmanagercustomization` | `number` | `DBOFIELDTYPE_INTEGER` | `PUCg` | 1 | 0 | 1 |  |
| `ismultilayered` | `number` | `DBOFIELDTYPE_INTEGER` | `SzHA` | 1 | 0 | 1 |  |
| `isrecolorable` | `number` | `DBOFIELDTYPE_INTEGER` | `liGM` | 1 | 0 | 1 |  |
| `meshid` | `number` | `DBOFIELDTYPE_INTEGER` | `eENs` | 19 | 0 | 500000 |  |
| `rigamatetype` | `number` | `DBOFIELDTYPE_INTEGER` | `eTDW` | 7 | 0 | 64 |  |
| `sleevetypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `vrVG` | 5 | 0 | 16 |  |
| `texturevariationcount` | `number` | `DBOFIELDTYPE_INTEGER` | `AsxF` | 7 | 0 | 100 |  |

## wardrobeexclusions

Binary code: `WFUF`. Record type: `Fc27Record<'wardrobeexclusions', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `equippedassettypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `GyNR` | 19 | 0 | 500000 |  |
| `equippedgameassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `lCau` | 19 | 0 | 500000 |  |
| `excludeassettypeid` | `number` | `DBOFIELDTYPE_INTEGER` | `RdTL` | 19 | 0 | 500000 |  |
| `excludegameassetid` | `number` | `DBOFIELDTYPE_INTEGER` | `ydkU` | 19 | 0 | 500000 |  |
| `exclusionid` | `number` | `DBOFIELDTYPE_INTEGER` | `daCW` | 19 | 0 | 500000 | Yes |

## womendeactivatedstories

Binary code: `VplT`. Record type: `Fc27Record<'womendeactivatedstories', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `storytype` | `number` | `DBOFIELDTYPE_INTEGER` | `REui` | 6 | 0 | 63 | Yes |
| `substorytype` | `number` | `DBOFIELDTYPE_INTEGER` | `FPUp` | 6 | 0 | 63 |  |

## wtlocations

Binary code: `GJsg`. Record type: `Fc27Record<'wtlocations', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `globalx` | `number` | `DBOFIELDTYPE_INTEGER` | `MqqM` | 18 | 0 | 200000 |  |
| `globaly` | `number` | `DBOFIELDTYPE_INTEGER` | `TpaS` | 18 | 0 | 200000 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `localx` | `number` | `DBOFIELDTYPE_INTEGER` | `VGWW` | 18 | 0 | 200000 |  |
| `localy` | `number` | `DBOFIELDTYPE_INTEGER` | `uFSI` | 18 | 0 | 200000 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |
| `regionid` | `number` | `DBOFIELDTYPE_INTEGER` | `tNdD` | 10 | 0 | 1000 |  |

## wtregions

Binary code: `RrHu`. Record type: `Fc27Record<'wtregions', 'main'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `globalx` | `number` | `DBOFIELDTYPE_INTEGER` | `MqqM` | 18 | 0 | 200000 |  |
| `globaly` | `number` | `DBOFIELDTYPE_INTEGER` | `TpaS` | 18 | 0 | 200000 |  |
| `id` | `number` | `DBOFIELDTYPE_INTEGER` | `CkjP` | 10 | 0 | 1000 | Yes |
| `ishub` | `number` | `DBOFIELDTYPE_INTEGER` | `rWZf` | 1 | 0 | 1 |  |
| `name` | `string` | `DBOFIELDTYPE_STRING` | `vIys` | 520 | 0 | 0 |  |
