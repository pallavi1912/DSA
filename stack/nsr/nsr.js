function nsr(nums) {
    let vector = [];
    let stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {  // Fixed loop condition
        if (stack.length === 0) {
            vector.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            vector.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
            while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                vector.push(-1);
            } else {
                vector.push(stack[stack.length - 1]);
            }
        }
        stack.push(nums[i]);
    }

    return vector.reverse();
}


console.log(" [10, 20, 15, 12, 18, 25, 30, 5]: ",nsr( [10, 20, 15, 12, 18, 25, 30, 5]));

module.exports = nsr;
