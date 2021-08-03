

// let arr = [2,1,0,3,5]

// function max(a, b){
// 	if (a >= b)
// 		return a;
// 	else
// 		return b;
// }

// int find_max( i, j, num){
// 	int vmax;
// 	int vmax1,vmax2;
// 	int mid;
// 	if ( i==j ){
// 		vmax=num[i];
// 		printf("max is %d \n", vmax);
// 		return vmax;
// 	}
// 	if( i==(j-1) ){
// 		vmax=max(num[i],num[j]);
// 		printf("max is %d \n", vmax);
// 		return vmax;
// 	}
// 	mid=(i+j)/2;
// 	printf("i=%d, mid=%d,j=%d \n",i,mid,j);
// 	vmax1=find_max(i,mid,num);
// 	vmax2=find_max(mid+1,j,num);
// 	vmax=max(vmax1,vmax2);
// 	return vmax;
// 	printf("max is %d \n", vmax);

// }
// let max_a = Max(arr, 0, arr.length - 1);
// // console.log((max_a));