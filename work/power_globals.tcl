globalNetConnect VDD -type pgpin -pin VDD -inst *
globalNetConnect VSS -type pgpin -pin VSS -inst *
globalNetConnect VDD -type pgpin -pin vdd! -inst *
globalNetConnect VSS -type pgpin -pin gnd! -inst *
globalNetConnect VDD -type tiehi
globalNetConnect VSS -type tielo
globalNetConnect VDD -type tiehi -pin VDD -inst *
globalNetConnect VSS -type tielo -pin VSS -inst *

