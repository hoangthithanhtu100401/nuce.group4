const insertionSort=async(n_insert)=>{
    for(let i_insert=0;i_insert<n_insert-1;i_insert++){
        let key_insert=i_insert+1;
        for(let j_insert=i_insert;j_insert>=0;j_insert--){
            showPicked("insert"+key_insert,"insert"+j_insert);
                await wait(1/n);    

                swapById("insert"+j_insert,"insert"+key_insert);
                key_insert--;
            remPicked("insert"+key_insert,"insert"+j_insert);

            // Get out of the loop when the key_insert element reached it's correct position
            let a_insert = document.getElementById("insert"+(key_insert+1)).style.height.slice(0,-2);
            let b_insert = document.getElementById("insert"+(j_insert)).style.height.slice(0,-2);
            if(Number(a_insert)>Number(b_insert)) break;
        }
        for(let k_insert=0;k_insert<=i_insert;k_insert++) correctPos("insert"+k_insert);
    }
    correctPos("insert"+(n_insert-1));
}