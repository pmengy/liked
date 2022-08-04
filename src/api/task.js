import request from "@/utils/request";
/**
 * 工单状态列表
 * @returns promise
 */
export function getTaskStatus() {
  return request({
    url: "/task-service/task/allTaskStatus",
  });
}

/**
 * 工单搜索
 * @param {Object} params query
 * @returns promise
 */
export function searchTasks(params) {
  return request({
    url: "/task-service/task/search",
    params,
  });
}
