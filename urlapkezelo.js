/* Az űrlapról összegyűjtjük az adatokat, majd a submit gombra kattintva beletesszük a listába */

export function ujAdat(event){
    const nevELEM = $("#nev")
    const korELEM = $("#kor")
    const noELEM = $("#no")
    const ferfiELEM = $("#ferfi")
    const submitELEM = $("#submit")
    const adatOBJ = {
        nev: "",
        kor: 0,
        nem: false
    }
    submitELEM.on("submit", function(event) {
        event.preventDefault(); //leszedi az alapértelmezett hozzárendelt eseményt
        adatOBJ.nev = nevELEM.val()
        adatOBJ.kor = korELEM.val()
        adatOBJ.nem = ferfiELEM.isChecked()
        console.log(adatOBJ)
    })
}