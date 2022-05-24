impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        let str: String = x.to_string();
        let middle = str.len() / 2;
        
        str.bytes().take(middle).eq(str.bytes().rev().take(middle))
    }
}