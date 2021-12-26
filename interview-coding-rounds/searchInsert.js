var searchInsert = function() {
    let nums = [1,3,5,6];
    let target = 7;
    
    for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
    
};
