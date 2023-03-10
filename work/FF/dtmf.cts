###############################################################
#  Generated by:      Cadence Encounter 09.11-e029_1
#  OS:                Linux x86_64(Host ID lnx-vinita)
#  Generated on:      Fri Dec 11 13:27:10 2009
#  Command:           clockDesign -genSpecOnly dtmf_generate.cts
###############################################################
#
# Encounter(R) Clock Synthesis Technology File Format
#

#-- MacroModel --
#MacroModel pin <pin> <maxRiseDelay> <minRiseDelay> <maxFallDelay> <minFallDelay> <inputCap>

#-- Special Route Type --
#RouteTypeName specialRoute
#TopPreferredLayer 4
#BottomPreferredLayer 3
#PreferredExtraSpace 1
#End

#-- Regular Route Type --
#RouteTypeName regularRoute
#TopPreferredLayer 4
#BottomPreferredLayer 3
#PreferredExtraSpace 1
#End

#-- Clock Group --
#ClkGroup
#+ <clockName>

ClkGroup
+ DTMF_INST/TEST_CONTROL_INST/i_156/Y
+ DTMF_INST/TEST_CONTROL_INST/i_154/Y
+ DTMF_INST/TEST_CONTROL_INST/i_152/Y
+ DTMF_INST/TEST_CONTROL_INST/i_160/Y
+ DTMF_INST/TEST_CONTROL_INST/i_158/Y

#------------------------------------------------------------
# Clock Root   : DTMF_INST/TEST_CONTROL_INST/i_158/Y
# Clock Name   : vclk2
# Clock Period : 14ns
#------------------------------------------------------------
AutoCTSRootPin DTMF_INST/TEST_CONTROL_INST/i_158/Y
Period         14ns
MaxDelay       14ns # default value
MinDelay       0ns   # default value
MaxSkew        250ps # set_clock_uncertainty
SinkMaxTran    400ps # default value
BufMaxTran     400ps # default value
Buffer         CLKBUFX1 CLKBUFX12 CLKBUFX16 CLKBUFX2 CLKBUFX20 CLKBUFX3 CLKBUFX4 CLKBUFX8 CLKBUFXL CLKINVX1 CLKINVX12 CLKINVX16 CLKINVX2 CLKINVX20 CLKINVX3 CLKINVX4 CLKINVX8 CLKINVXL 
NoGating       NO
DetailReport   YES
#SetDPinAsSync  NO
#SetIoPinAsSync NO
#SetASyncSRPinAsSync  NO
#SetTriStEnPinAsSync NO
#SetBBoxPinAsSync NO
RouteClkNet    YES
#PostOpt        YES
#OptAddBuffer   NO
#RouteType      specialRoute
#LeafRouteType  regularRoute
ThroughPin
END

#------------------------------------------------------------
# Clock Root   : DTMF_INST/TEST_CONTROL_INST/i_160/Y
# Clock Name   : vclk2
# Clock Period : 14ns
#------------------------------------------------------------
AutoCTSRootPin DTMF_INST/TEST_CONTROL_INST/i_160/Y
Period         14ns
MaxDelay       14ns # default value
MinDelay       0ns   # default value
MaxSkew        250ps # set_clock_uncertainty
SinkMaxTran    400ps # default value
BufMaxTran     400ps # default value
Buffer         CLKBUFX1 CLKBUFX12 CLKBUFX16 CLKBUFX2 CLKBUFX20 CLKBUFX3 CLKBUFX4 CLKBUFX8 CLKBUFXL CLKINVX1 CLKINVX12 CLKINVX16 CLKINVX2 CLKINVX20 CLKINVX3 CLKINVX4 CLKINVX8 CLKINVXL 
NoGating       NO
DetailReport   YES
#SetDPinAsSync  NO
#SetIoPinAsSync NO
#SetASyncSRPinAsSync  NO
#SetTriStEnPinAsSync NO
#SetBBoxPinAsSync NO
RouteClkNet    YES
#PostOpt        YES
#OptAddBuffer   NO
#RouteType      specialRoute
#LeafRouteType  regularRoute
ThroughPin
END

#------------------------------------------------------------
# Clock Root   : DTMF_INST/TEST_CONTROL_INST/i_152/Y
# Clock Name   : vclk2
# Clock Period : 14ns
#------------------------------------------------------------
AutoCTSRootPin DTMF_INST/TEST_CONTROL_INST/i_152/Y
Period         14ns
MaxDelay       14ns # default value
MinDelay       0ns   # default value
MaxSkew        250ps # set_clock_uncertainty
SinkMaxTran    400ps # default value
BufMaxTran     400ps # default value
Buffer         CLKBUFX1 CLKBUFX12 CLKBUFX16 CLKBUFX2 CLKBUFX20 CLKBUFX3 CLKBUFX4 CLKBUFX8 CLKBUFXL CLKINVX1 CLKINVX12 CLKINVX16 CLKINVX2 CLKINVX20 CLKINVX3 CLKINVX4 CLKINVX8 CLKINVXL 
NoGating       NO
DetailReport   YES
#SetDPinAsSync  NO
#SetIoPinAsSync NO
#SetASyncSRPinAsSync  NO
#SetTriStEnPinAsSync NO
#SetBBoxPinAsSync NO
RouteClkNet    YES
#PostOpt        YES
#OptAddBuffer   NO
#RouteType      specialRoute
#LeafRouteType  regularRoute
ThroughPin
END

#------------------------------------------------------------
# Clock Root   : DTMF_INST/TEST_CONTROL_INST/i_154/Y
# Clock Name   : vclk2
# Clock Period : 14ns
#------------------------------------------------------------
AutoCTSRootPin DTMF_INST/TEST_CONTROL_INST/i_154/Y
Period         14ns
MaxDelay       14ns # default value
MinDelay       0ns   # default value
MaxSkew        250ps # set_clock_uncertainty
SinkMaxTran    400ps # default value
BufMaxTran     400ps # default value
Buffer         CLKBUFX1 CLKBUFX12 CLKBUFX16 CLKBUFX2 CLKBUFX20 CLKBUFX3 CLKBUFX4 CLKBUFX8 CLKBUFXL CLKINVX1 CLKINVX12 CLKINVX16 CLKINVX2 CLKINVX20 CLKINVX3 CLKINVX4 CLKINVX8 CLKINVXL 
NoGating       NO
DetailReport   YES
#SetDPinAsSync  NO
#SetIoPinAsSync NO
#SetASyncSRPinAsSync  NO
#SetTriStEnPinAsSync NO
#SetBBoxPinAsSync NO
RouteClkNet    YES
#PostOpt        YES
#OptAddBuffer   NO
#RouteType      specialRoute
#LeafRouteType  regularRoute
ThroughPin
END

#------------------------------------------------------------
# Clock Root   : DTMF_INST/TEST_CONTROL_INST/i_156/Y
# Clock Name   : vclk2
# Clock Period : 14ns
#------------------------------------------------------------
AutoCTSRootPin DTMF_INST/TEST_CONTROL_INST/i_156/Y
Period         14ns
MaxDelay       14ns # default value
MinDelay       0ns   # default value
MaxSkew        250ps # set_clock_uncertainty
SinkMaxTran    400ps # default value
BufMaxTran     400ps # default value
Buffer         CLKBUFX1 CLKBUFX12 CLKBUFX16 CLKBUFX2 CLKBUFX20 CLKBUFX3 CLKBUFX4 CLKBUFX8 CLKBUFXL CLKINVX1 CLKINVX12 CLKINVX16 CLKINVX2 CLKINVX20 CLKINVX3 CLKINVX4 CLKINVX8 CLKINVXL 
NoGating       NO
DetailReport   YES
#SetDPinAsSync  NO
#SetIoPinAsSync NO
#SetASyncSRPinAsSync  NO
#SetTriStEnPinAsSync NO
#SetBBoxPinAsSync NO
RouteClkNet    YES
#PostOpt        YES
#OptAddBuffer   NO
#RouteType      specialRoute
#LeafRouteType  regularRoute
ThroughPin
END

#------------------------------------------------------------
# Clock Root   : DTMF_INST/TEST_CONTROL_INST/i_150/Y
# Clock Name   : vclk1
# Clock Period : 7ns
#------------------------------------------------------------
AutoCTSRootPin DTMF_INST/TEST_CONTROL_INST/i_150/Y
Period         7ns
MaxDelay       2ns # set_clock_latency
MinDelay       2ns # set_clock_latency
MaxSkew        250ps # set_clock_uncertainty
SinkMaxTran    400ps # default value
BufMaxTran     400ps # default value
Buffer         CLKBUFX1 CLKBUFX12 CLKBUFX16 CLKBUFX2 CLKBUFX20 CLKBUFX3 CLKBUFX4 CLKBUFX8 CLKBUFXL CLKINVX1 CLKINVX12 CLKINVX16 CLKINVX2 CLKINVX20 CLKINVX3 CLKINVX4 CLKINVX8 CLKINVXL 
NoGating       NO
DetailReport   YES
#SetDPinAsSync  NO
#SetIoPinAsSync NO
#SetASyncSRPinAsSync  NO
#SetTriStEnPinAsSync NO
#SetBBoxPinAsSync NO
RouteClkNet    YES
#PostOpt        YES
#OptAddBuffer   NO
#RouteType      specialRoute
#LeafRouteType  regularRoute
ThroughPin
END

