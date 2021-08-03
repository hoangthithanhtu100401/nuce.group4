const linearSearch=async(n_linear, target_linear)=>{
    for(i_linear=0;i_linear<n_linear;i_linear++){
        document.getElementById("linear"+i_linear).style.background = 'orange';
        const i_linear_dom=document.getElementById("linear"+i_linear);
        // const i_target_dom=document.getElementById("select"+i_target);
        let i_target_dom_ht = i_linear_dom.style.height.slice(0,-2);
        if(Number(i_target_dom_ht) == Number(target_linear)){
            document.getElementById("linear"+i_linear).style.background = 'green';
            break;
        }
        await wait(0.0001);
            
        // remPicked("select"+i_select,"select"+i_linear);
    }
}