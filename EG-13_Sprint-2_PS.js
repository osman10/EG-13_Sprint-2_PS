// EG-13_Sprint-2_PS.js

/**
 * 1. Reverse a String
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * 2. Find Maximum
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    if (!nums || nums.length === 0) return undefined;
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

/**
 * 3. Check for Palindrome
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

/**
 * 4. Sum Array Elements
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

/**
 * 5. Count Vowels
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++;
    }
    return count;
}

/**
 * 6. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

/**
 * 7. Flatten a Nested Array
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flattened = flattenArray(arr[i]);
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

/**
 * 8. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(strs[i]);
        } else {
            map.set(sorted, [strs[i]]);
        }
    }
    return Array.from(map.values());
}

/**
 * 9. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const seen = new Map();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        if (seen.has(s[right])) {
            left = Math.max(left, seen.get(s[right]) + 1);
        }
        seen.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

/**
 * 10. Deep Clone an Object
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }
    const objCopy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        reverseString,
        findMax,
        isPalindrome,
        sumArray,
        countVowels,
        twoSum,
        flattenArray,
        groupAnagrams,
        lengthOfLongestSubstring,
        deepClone
    };
}
