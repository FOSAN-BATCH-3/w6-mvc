class todoView{
    static listHelp(){
        console.log('\n$ node todo.js help # menampilkan command apa saja yang tersedia\n$ node todo.js list # Melihat daftar TODO\n$ node todo.js add <task_content> # Menambahkan TODO ke dalam list\n$ node todo.js find <task_id> # Melihat detail TODO sesuai task_id nya\n$ node todo.js delete <task_id> # Menghapus TODO sesuai task_id nya \n$ node todo.js completed <task_id> # Menandai TODO selesai\n$ node todo.js uncompleted <task_id> # Menandai TODO belum selesai\n');
    }
    static lihatList(data){
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].id+'.'+' '+data[i].task)
        }
    }
    static lihatData(data){
        console.log(data);
    }
    static fail(){
        console.log('penulisan salah!!\nSilahkan lihat \'PANDUAN\' dengan ketik $node todo.js help\n');
    }
}

module.exports = todoView;