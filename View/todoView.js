class todoView{

    static lihatPesan (data){
    console.log(data)
    }

    static lihatPesan0(){
        console.log('Data Kosong')
    }

    static lihatPesan1(data){
        for (let i=0;i <data.length; i++){
            console.log(`${data[i].task_id}. ${data[i].task_content}`,'[',data[i].status,']')
        }
    }

    static lihatPesan2(data){
            console.log(`${data.task_id}. ${data.task_content}`,'[',data.status,']')
        
    }

    static lihatHelp(){
        console.log(` $ node kegiatan.js help # menampilkan command apa saja yang tersedia
        $ node kegiatan.js list # Melihat daftar kegiatan
        $ node kegiatan.js add <task_content> # Menambahkan kegiatan ke dalam list
        $ node kegiatan.js find <task_id> # Melihat detail kegiatan sesuai 'task_id' nya
        $ node kegiatan.js delete <task_id> # Menghapus kegiatan sesuai 'task_id' nya
        $ node kegiatan.js completed <task_id> # Menandai status kegiatan selesai
        $ node kegiatan.js uncompleted <task_id> # Menandai status kegiatan belum selesai
        $ node kegiatan.js completeList # melihat daftar kegiatan yang sudah completed`)
    }
}

module.exports = todoView;