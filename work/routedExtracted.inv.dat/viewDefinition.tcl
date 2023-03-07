if {![namespace exists ::IMEX]} { namespace eval ::IMEX {} }
set ::IMEX::dataVar [file dirname [file normalize [info script]]]
set ::IMEX::libVar ${::IMEX::dataVar}/libs

create_library_set -name default_libset_max\
   -timing\
    [list ${::IMEX::libVar}/mmmc/rom_512x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/tpz973gwc-lite_slow.lib\
    ${::IMEX::libVar}/mmmc/ram_256x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/ram_128x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/slow.lib\
    ${::IMEX::libVar}/mmmc/pllclk_slow.lib]\
   -si\
    [list ${::IMEX::libVar}/mmmc/slow.cdb]
create_library_set -name default_libset_min\
   -timing\
    [list ${::IMEX::libVar}/mmmc/ram_256x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/pllclk_fast.lib\
    ${::IMEX::libVar}/mmmc/ram_128x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/fast.lib\
    ${::IMEX::libVar}/mmmc/rom_512x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/tpz973gbc-lite_fast.lib]\
   -si\
    [list ${::IMEX::libVar}/mmmc/fast.cdb]
create_rc_corner -name default_rc_corner_worst\
   -preRoute_res 1\
   -postRoute_res 1\
   -preRoute_cap 1\
   -postRoute_cap 1\
   -postRoute_xcap 1\
   -preRoute_clkres 0\
   -preRoute_clkcap 0\
   -qx_tech_file ${::IMEX::libVar}/mmmc/t018s6mm.tch
create_delay_corner -name default_delay_corner_max\
   -library_set default_libset_max\
   -rc_corner default_rc_corner_worst
create_delay_corner -name default_delay_corner_ocv\
   -rc_corner default_rc_corner_worst\
   -early_library_set default_libset_min\
   -late_library_set default_libset_max
create_delay_corner -name default_delay_corner_min\
   -library_set default_libset_min\
   -rc_corner default_rc_corner_worst
create_constraint_mode -name default_constraint_mode\
   -sdc_files\
    [list ${::IMEX::libVar}/mmmc/dtmf.sdc]
create_analysis_view -name default_analysis_view_setup -constraint_mode default_constraint_mode -delay_corner default_delay_corner_max
create_analysis_view -name default_analysis_view_hold -constraint_mode default_constraint_mode -delay_corner default_delay_corner_min
set_analysis_view -setup [list default_analysis_view_setup] -hold [list default_analysis_view_hold]
