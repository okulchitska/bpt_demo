Window("Flight Reservation Dialog").Activate
Window("Flight Reservation Dialog").WinMenu("Menu").Select "File;Fax Order..."
Window("Flight Reservation Dialog").Dialog("Fax Order No. 3").WinEdit("Fax Number:").Set "(555)222-1111"
Window("Flight Reservation Dialog").Dialog("Fax Order No. 3").WinCheckBox("Send Signature with order").Set "ON"
Window("Flight Reservation Dialog").Dialog("Fax Order No. 3").Drag 254,209
Window("Flight Reservation Dialog").Dialog("Fax Order No. 3").WinObject("Fax").Drop 331,228
Window("Flight Reservation Dialog").Dialog("Fax Order No. 3").WinButton("Send").Click
