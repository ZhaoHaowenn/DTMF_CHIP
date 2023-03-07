if {![namespace exists ::IMEX]} { namespace eval ::IMEX {} }
set ::IMEX::dataVar [file dirname [file normalize [info script]]]
set ::IMEX::libVar ${::IMEX::dataVar}/libs

create_library_set -name dtmf_libs_min\
   -timing\
    [list ${::IMEX::libVar}/mmmc/pllclk_fast.lib\
    ${::IMEX::libVar}/mmmc/ram_128x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/rom_512x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/ram_256x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/fast.lib\
    ${::IMEX::libVar}/mmmc/tpz973gbc-lite_fast.lib]\
   -si\
    [list ${::IMEX::libVar}/mmmc/fast.cdb]
create_library_set -name dtmf_libs_max\
   -timing\
    [list ${::IMEX::libVar}/mmmc/pllclk_slow.lib\
    ${::IMEX::libVar}/mmmc/ram_128x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/ram_256x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/rom_512x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/slow.lib\
    ${::IMEX::libVar}/mmmc/tpz973gwc-lite_slow.lib]\
   -si\
    [list ${::IMEX::libVar}/mmmc/slow.cdb]
create_rc_corner -name dtmf_rc_corner\
   -cap_table ${::IMEX::libVar}/mmmc/t018s6mlv.capTbl\
   -preRoute_res 1\
   -postRoute_res 1\
   -preRoute_cap 1\
   -postRoute_cap 1\
   -postRoute_xcap 1\
   -preRoute_clkres 0\
   -preRoute_clkcap 0\
   -qx_tech_file ${::IMEX::libVar}/mmmc/t018s6mm.tch
create_delay_corner -name dtmf_corner_min\
   -library_set dtmf_libs_min\
   -rc_corner dtmf_rc_corner
create_delay_corner -name dtmf_corner_max\
   -library_set dtmf_libs_max\
   -rc_corner dtmf_rc_corner
create_constraint_mode -name common\
   -sdc_files\
    [list ${::IMEX::libVar}/mmmc/dtmf.sdc]
create_analysis_view -name dtmf_view_hold -constraint_mode common -delay_corner dtmf_corner_min
create_analysis_view -name dtmf_view_setup -constraint_mode common -delay_corner dtmf_corner_max
set_analysis_view -setup [list dtmf_view_setup] -hold [list dtmf_view_hold]
