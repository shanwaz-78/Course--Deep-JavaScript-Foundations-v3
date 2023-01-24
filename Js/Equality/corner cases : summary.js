// Dont use == (Loose equality.) with those cases Like. ->

// 1. == with 0 or '' (or even ' ') dont use with o or empty string or even empty string with white space.
// 2. == dont use it with non-primitives.
// 3. In my personal opinion also dont use it with primitives to be more safe, use it only to convertion among the primtives.
// 4. == Dont use it with true or false : use toBoolean or in maximum cases you know the dont know the data types the use (Strict equality.)