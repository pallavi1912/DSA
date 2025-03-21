function ngl(nums) {
    let stack = [];
    let vector = [];
    
    for(let i=0;i< nums.length;i++){
        if(stack.length == 0){
            vector.push(-1);
        }
        else if(stack.length > 0 && stack[stack.length-1] > nums[i]){
            vector.push(stack[stack.length-1]);
        }else if(stack.length > 0 && stack[stack.length-1] <= nums[i]){
            while(stack.length > 0 && stack[stack.length-1] <= nums[i]){
                stack.pop();
            }

            if(stack.length == 0){
                vector.push(-1);
            }else{
                vector.push(stack[stack.length-1]);
            }
        }
        stack.push(nums[i]);
    }
    return vector;
}

// Export the function
module.exports = ngl; 
