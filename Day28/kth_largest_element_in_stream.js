let KthLargest = function(k, nums) {
    this.k = k;
    this.pq = new MinPriorityQueue();

    for(let num of nums){
        this.pq.enqueue(num);
    }
    while(this.pq.size() > k){
        this.pq.dequeue();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.pq.enqueue(val);
    if(this.pq.size() > this.k){
        this.pq.dequeue();
    }
    return this.pq.front().element;
};


// TC = O(m * logn)
// SC = O(k)