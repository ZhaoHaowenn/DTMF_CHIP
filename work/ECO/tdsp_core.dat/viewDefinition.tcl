if {![namespace exists ::IMEX]} { namespace eval ::IMEX {} }
set ::IMEX::dataVar [file dirname [file normalize [info script]]]
set ::IMEX::libVar ${::IMEX::dataVar}/libs

create_library_set -name default_libset_max\
   -timing\
    [list ${::IMEX::libVar}/mmmc/rom_512x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/ram_256x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/ram_128x16A_slow_syn.lib\
    ${::IMEX::libVar}/mmmc/slow.lib\
    ${::IMEX::libVar}/mmmc/pllclk_slow.lib]
create_library_set -name default_libset_min\
   -timing\
    [list ${::IMEX::libVar}/mmmc/ram_256x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/pllclk_fast.lib\
    ${::IMEX::libVar}/mmmc/ram_128x16A_fast_syn.lib\
    ${::IMEX::libVar}/mmmc/fast.lib\
    ${::IMEX::libVar}/mmmc/rom_512x16A_fast_syn.lib]
create_rc_corner -name default_rc_corner_worst\
   -cap_table ${::IMEX::libVar}/mmmc/t018s6mlv.CapTbl\
   -preRoute_res 1\
   -postRoute_res 1\
   -preRoute_cap 1\
   -postRoute_cap 1\
   -postRoute_xcap 1\
   -preRoute_clkres 0\
   -preRoute_clkcap 0\
   -postRoute_clkcap 1
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
    [list ${::IMEX::libVar}/mmmc/tdsp_core.constr.pt]
create_analysis_view -name default_analysis_view_setup -constraint_mode default_constraint_mode -delay_corner default_delay_corner_max
create_analysis_view -name default_analysis_view_hold -constraint_mode default_constraint_mode -delay_corner default_delay_corner_min
set_analysis_view -setup [list default_analysis_view_setup] -hold [list default_analysis_view_hold]
