function mergeIntervals(intervals){
    if(intervals.length <= 1){
        return intervals;
    }
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [];
    let newInterval = intervals[0];
    result.push(newInterval);

    for(const interval of intervals){
        if(interval[0] <= newInterval[1]){
            newInterval[1] = Math.max(interval[1], newInterval[1]);
        }else{
            newInterval = interval;
            result.push(newInterval);
        }
    }
    return result;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

// TC = O(n logn)
// SC = O(n)