var longestCommonPrefix = function (strs) {
    // Longest common prefix string
    let longestCommonPrefix = "";

    // Base condition
    if (strs == null || strs.length == 0) {
        return longestCommonPrefix;
    }

    // Find the minimum length string from the array
    let minimumLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minimumLength = Math.min(minimumLength, strs[i].length);
    }
    console.log("minimumLength => ", minimumLength);

    // Loop for the minimum length
    for (let i = 0; i < minimumLength; i++) {
        
        // Get the current character from first string
        let current = strs[0][i];
        console.log("current => ", current, "strs[0] => ", strs[0]);

        // Check if this character is found in all other strings or not
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != current) {
                console.log("longestCommonPrefix => ", longestCommonPrefix);
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += current;
    }

    return longestCommonPrefix;
};

longestCommonPrefix(["flower","flow","flight"]);

//longestCommonPrefix(["dog","racecar","car"]);