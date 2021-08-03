const linearMax=async(n_max)=>{
    let i_max_real = 0;
    document.getElementById("maxLinear"+i_max_real).style.background = 'red';
    const i_max_dom=document.getElementById("maxLinear"+i_max_real);
    let i_max_dom_ht = i_max_dom.style.height.slice(0,-2);

    for(i_max=1;i_max<n_max;i_max++){
        document.getElementById("maxLinear"+i_max).style.background = 'orange';
        const i_plot_dom=document.getElementById("maxLinear"+i_max);
        let i_plot_dom_ht = i_plot_dom.style.height.slice(0,-2);

        if(Number(i_max_dom_ht) < Number(i_plot_dom_ht)) {
            document.getElementById("maxLinear"+i_max_real).style.background = 'black';
            i_max_dom_ht = i_plot_dom_ht;
            i_max_real = i_max;

        }
        
        document.getElementById("maxLinear"+i_max).style.background = 'gray';
       
        await wait(0.0001);
        if (Number(i_max) == Number(n_max - 1)) {
            document.getElementById("maxLinear"+i_max_real).style.background = 'green';
            console.log("Max: " + i_max_dom_ht);
            return
        }
        
        
    }
}