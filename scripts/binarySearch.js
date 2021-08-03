const binarySearch=async(low, high, target, i_target)=>{
    if (low > high) return false;

    let mid = Math.floor((low+high)/2);

    console.log("Binary Search : "+low +" "+high +" " + target);
    document.getElementById("binary"+low).style.background = 'orange';
    document.getElementById("binary"+high).style.background = 'orange';
    document.getElementById("binary"+mid).style.background = '#00CCCD';
    const i_binary_dom=document.getElementById("binary"+mid);
    let i_mid_binary_ht = i_binary_dom.style.height.slice(0,-2);

    const target_binary_dom=document.getElementById("binary"+i_target);
    let target_binary_ht = target_binary_dom.style.height.slice(0,-2);

    console.log("Binary Search mid" + i_mid_binary_ht + " " + target_binary_ht);
    if (Number(i_mid_binary_ht) === Number(target_binary_ht)) {
        document.getElementById("binary"+i_target).style.background = 'green';
        return;
    }
    if (Number(i_mid_binary_ht) > Number(target_binary_ht)) {
        await binarySearch(low, mid, target, i_target);
    } else {
        await binarySearch(mid,high, target, i_target);
    }
    await wait(0.0001);
    // remPicked("binary"+(low),"binary"+(high));
    
}