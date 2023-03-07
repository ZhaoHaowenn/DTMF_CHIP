#New menu
uiAdd expMenu -type menu -label NewMenu -in main
uiAdd expCmd -type command -label "New command ..." -command [list puts "execute my command"] -in expMenu

#New toolbar
uiAdd expToolbar -type toolbar -in main -label "New Toolbar" -newline true
uiAdd expToolbutton -type toolbutton -in expToolbar -label "new toolbutton" \
      -tooltip "new toolbutton" -icon [file join ./ layout-place-in-schematic.png] \
      -command [list puts "New toolbutton ..."]

