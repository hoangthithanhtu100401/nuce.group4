
function find_max_binary(i_max_binary,j_max_binary,a_binary_max, b_binary_max){
    console.log("Compare" + a_binary_max +"vs" + b_binary_max);
    
	if (Number(a_binary_max) > Number(b_binary_max)){
        return [a_binary_max, i_max_binary];
    }
	else { 
        return [b_binary_max, j_max_binary];
    }
}

function one_max_binary(a_binary_max, b_binary_max){
    // console.log("Compare" + a_binary_max +"vs" + b_binary_max);
	if (Number(a_binary_max) > Number(b_binary_max)){
        return a_binary_max;
    }
	else { 
        return b_binary_max;
    }
}
const binaryMax = async(i_max_binary, j_max_binary)=>{
// function binaryMax(i_max_binary, j_max_binary) {
    
    let vmax;
	let vmax1,vmax2;
	let mid_binary;
    await wait(1/j_max_binary);
    document.getElementById("maxBinary"+i_max_binary).style.background = 'orange';
    document.getElementById("maxBinary"+j_max_binary).style.background = 'orange';
    // console.log("start: " + i_max_binary + "end" + j_max_binary);
	if ( i_max_binary==j_max_binary ){
        // console.log('a'+i_max_binary +'vs' +j_max_binary);
		vmax=document.getElementById("maxBinary"+i_max_binary).style.height.slice(0,-2);
        await wait(1/j_max_binary);
        remPicked("maxBinary"+i_max_binary, "maxBinary"+j_max_binary)
        await wait(1/j_max_binary);
        document.getElementById("maxBinary"+i_max_binary).style.background = 'red';
        await wait(1/j_max_binary);
        // remPicked("maxBinary"+i_max_binary, "maxBinary"+j_max_binary)
		return vmax;
	}
	if( i_max_binary==(j_max_binary-1) ){
        // console.log('b'+i_max_binary +'vs' +j_max_binary);
		arr_vmax=find_max_binary(i_max_binary,j_max_binary,document.getElementById("maxBinary"+i_max_binary).style.height.slice(0,-2),document.getElementById("maxBinary"+j_max_binary).style.height.slice(0,-2));
        vmax = arr_vmax[0]
        await wait(1/j_max_binary);
        remPicked("maxBinary"+i_max_binary, "maxBinary"+j_max_binary)
        await wait(1/j_max_binary);
        document.getElementById("maxBinary"+arr_vmax[1]).style.background = 'red';
        await wait(1/j_max_binary);
        // remPicked("maxBinary"+i_max_binary, "maxBinary"+j_max_binary)
        return vmax;
	}
    mid_binary=Math.floor((i_max_binary+j_max_binary)/2);
    // console.log("mid: " + mid_binary);
	vmax1= await binaryMax(i_max_binary,mid_binary);
    // console.log("*-----*");
	vmax2= await binaryMax(mid_binary+1,j_max_binary);
    // console.log("1: " +vmax1 + "2: " + vmax2);
	vmax=one_max_binary(vmax1,vmax2);
	return vmax;
 
}