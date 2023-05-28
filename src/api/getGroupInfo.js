
// author: debox.tq.eth
// 2023.5

/**
 * get group infomation
 * @param {String} group_invite_url 
 * @returns 
 */
export default function getGroupInfo(group_invite_url) {

  return fetch(`/api/group/info?group_invite_url=${group_invite_url}`, {
    methods: "POST",
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'replace your API-Key'
    },
  })
    .then((data) => {
      return data.json();
    }) 
}