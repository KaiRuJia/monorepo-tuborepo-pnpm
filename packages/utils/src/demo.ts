// 手写promiseAll
export function promiseAll(iterable: any) {
  const promises = Array.from(iterable)
  if(promises.length === 0) {
    return Promise.resolve([])
  }
  const results = new Array(promises.length)
  let count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(value => {
        results[index] = value
        count ++
        if(promises.length === count) {
          resolve(results)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}

export function demo() {

  // console.log('\n1.=== promiseAll ===');
  // console.log('\n1===参数数组===')
  // promiseAll([
  //   Promise.resolve('1'),
  //   1,
  //   'hello'
  // ]).then((res) => {
  //   console.log(res)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // console.log('\n2=== 参数set ===')
  // promiseAll(new Set([Promise.resolve('22'), '2']))
  // .then(res => console.log(res))
  // .catch(error => console.log(error))

  // console.log('\n3 === map ===')
  // const map = new Map()
  // map.set(1, Promise.resolve('one'))
  // map.set(2, Promise.reject('two'))
  // map.set(3, Promise.resolve('three'))
  // promiseAll(map.values()).then(res => console.log(res)).catch(error => console.log(error))

  // console.log('\n2. ===事件循环机制，闭包，作用域 setTimeout是宏任务===')
  // for(var i=0; i<3; i++){
  //   setTimeout(() => console.log(i),100);
  // } // 3 3 3


  // for(let i=0; i<3; i++) {
  //   setTimeout(() => console.log(i), 100)
  // } // 0 1 2;

  // for(var i = 0; i < 3; i++) {
  //   (function(index) {
  //     setTimeout(() => console.log(index, '立即执行函数'), 100)
  //   })(i)
  // } // 0 1 2

//   // 判断是一个数组的两种方法
//   console.log(Array.isArray([]), Object.prototype.toString.call([]))

//   // 定义任意长度的数组
//   const arr1 = new Array(3)
//   console.log(arr1.fill(2))

//   const arr2 = Array.from({ length: 3 }, (_, index) =>  `item${index}`)
//   console.log(arr2)

// 数组去重
 const arr = [1, 3, 3, 3, 5]
//  console.log([...new Set(arr)])

// includes
// let _arr: number[] = []
// arr.forEach(item => {
//   if(!_arr.includes(item)) {
//     _arr.push(item)
//   }
// })
// console.log(_arr)

// reduce
// const _arr: number[] = arr.reduce((a: number[], v: number, i: number) => {
//   if (!a.includes(v)) {
//     a.push(v)
//   }
//   return  a
// }, [])
// console.log(_arr)

// filter
// const _arr = arr.filter((v, i, self) => {
//   if(self.includes(v)) {
//     return v
//   }
// })
// console.log(_arr, arr)

// reduce 累加器
// const res = [1, 2, 3, 4, 5].reduce((pre, cur) => {
//   pre = pre + cur
//   return pre
// }, 0)

// reduce 找最大值
// const res = [1, 2, 4, 5, 6].reduce((pre, cur, i) => {
//   pre = Math.max(pre, cur)
//   return pre
// }, 0)

// console.log(res)

// console.log(Array.from('hello world'))

/**  设计并实现一个异步任务调度器 TaskScheduler，要求具备以下功能：
1. 任务管理：支持添加异步任务，每个任务返回 Promise
2. 并发控制：可设置最大并发数量，同时运行的任务不超过该数量
3. 任务队列：超出并发数的任务进入等待队列，按添加顺序执行
4. 状态监控：提供方法获取当前运行状态（等待中、执行中、已完成任务数）
5. 错误处理：单个任务失败不应影响其他任务执行
6. 扩展功能：支持任务优先级、暂停/恢复、任务取消等（加分项）
*/
 


class TaskScheduler {
  constructor() {
    this.runningTasks = new Map(); // 存储正在执行的任务
    this.waitingQueue = []; // 等待队列
  }

  /**
   * 添加任务到调度器
   * @param {Function} task - 返回 Promise 的任务函数
   * @param {Object} options - 任务选项
   * @param {string} options.id - 任务ID
   * @returns {Promise} 任务执行结果的 Promise
   */
  addTask(task, options = {}) {
    const taskId = options.id || `task_${Date.now()}_${Math.random()}`;
    
    return new Promise((resolve, reject) => {
      const taskInfo = {
        id: taskId,
        task,
        resolve,
        reject,
        status: 'waiting'
      };
      this.waitingQueue.push(taskInfo);
      console.log(this.waitingQueue, 'this.waitingQueue-----000000')
      // this.executeNextTask();
    });
  }

  /**
   * 执行下一个任务
   */
  executeNextTask() {
    if (this.waitingQueue.length === 0) {
      return;
    }
    const taskInfo = this.waitingQueue.shift();
    taskInfo.status = 'running';
    
    this.runningTasks.set(taskInfo.id, taskInfo);
    // 执行任务
    Promise.resolve()
      .then(() => taskInfo.task())
      .then(result => {
        taskInfo.resolve(result);
      })
      .catch(error => {
        taskInfo.reject(error);
      })
      .finally(() => {
        this.runningTasks.delete(taskInfo.id);
        this.executeNextTask(); // 执行下一个等待的任务
      });
  }

  /**
   * 获取当前状态
   * @returns {Object} 状态信息
   */
  getStatus() {
    return {
      waiting: this.waitingQueue.length,
      running: this.runningTasks.size,
      total: this.waitingQueue.length + this.runningTasks.size
    };
  }
}

// 使用示例
async function testTaskScheduler() {
  console.log('=== 异步任务调度器测试 ===');
  
  const scheduler = new TaskScheduler();

  // 模拟异步任务
  const createTask = (name, duration) => {
    return () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Result of ${name}`);
      }, duration);
    });
  };

  // 添加多个任务
  const promises = [
    scheduler.addTask(createTask('Task1', 1000), { id: 't1' }),
    scheduler.addTask(createTask('Task2', 500), { id: 't2' }),
    scheduler.addTask(createTask('Task3', 1500), { id: 't3' })
  ];

  // 定期打印状态
  const statusInterval = setInterval(() => {
    const status = scheduler.getStatus();
    console.log(`状态: 等待-${status.waiting}, 运行-${status.running}`);
  }, 200);

  // 等待所有任务完成
  try {
    const results = await Promise.all(promises);
    clearInterval(statusInterval);
    
    console.log('\n=== 任务执行结果 ===');
    results.forEach((result, index) => {
      console.log(`任务 ${index + 1}: ${result}`);
    });
    
    console.log('\n=== 最终状态 ===');
    console.log(scheduler.getStatus());
    
  } catch (error) {
    console.error('测试过程中发生错误:', error);
  }
}

// 运行测试
testTaskScheduler();








}


