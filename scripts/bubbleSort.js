const bubbleSort = async(n_bubble)=>{
    for(i_bubble=0;i_bubble<n_bubble-1;i_bubble++){
        for(j_bubble=0;j_bubble<n_bubble-1-i_bubble;j_bubble++){
            showPicked("bubble"+j_bubble,"bubble"+(j_bubble+1));
            await wait(1/n_bubble);
            swapById("bubble"+j_bubble,"bubble"+(j_bubble+1))
            // con_bubblesole.timeEn_bubbled('swapById');
            remPicked("bubble"+(j_bubble),"bubble"+(j_bubble+1));
        }
    correctPos("bubble"+(n_bubble-1-i_bubble));
    }
    correctPos("bubble"+(n_bubble-1-i_bubble));
}