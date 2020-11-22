var AdmZip = require('adm-zip');

let test = async() => {

    var zip = new AdmZip("./Archive.zip");

    await zip.extractEntryTo(/*entry name*/"some_folder/my_file.txt", /*target path*/"/home/me/tempfolder", /*maintainEntryPath*/false, /*overwrite*/true);


};