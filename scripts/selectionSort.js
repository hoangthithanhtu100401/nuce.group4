
const selectionSort=async(n_select)=>{
    for(i_select=0;i_select<n_select-1;i_select++){
        let min_idx_select=i_select;
        for(j_select=i_select+1;j_select<n_select;j_select++){
            showPicked("select"+i_select,"select"+j_select);
                l_select = min_idx_select;
                document.getElementById("select"+min_idx_select).style.background = 'orange';
                const a=document.getElementById("select"+min_idx_select);
                const b=document.getElementById("select"+j_select);
                let a_ht = a.style.height.slice(0,-2);
                let b_ht = b.style.height.slice(0,-2);
                if(Number(b_ht) < Number(a_ht)){
                    min_idx_select=j_select;
                    document.getElementById("select"+l_select).style.background = '#99AAAB';
                    document.getElementById("select"+min_idx_select).style.background = 'orange';
                    // console.log(min_idx_select+" min");
                }
                await wait(1/n_select);
                
            remPicked("select"+i_select,"select"+j_select);
        }
        document.getElementById("select"+min_idx_select).style.background = "#99AAAB";
        await wait(1/n_select);
        swapById("select"+i_select,"select"+min_idx_select);
    correctPos("select"+i_select);
    }
    correctPos("select"+i_select);
}

