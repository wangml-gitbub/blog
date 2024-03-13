import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/frontEnd/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/frontEnd/': [
     // 第一部分
    {
      text: '基础',
      items: [
        {
          text: 'HTML',
          link: '/column/frontEnd/html'
        },
        {
          text: 'CSS',
          link: '/column/frontEnd/css'
        },
        {
          text: 'Javascript',
          link: '/column/frontEnd/js'
        }
      ]
    },
    // 第二部分
    {
      text: '进阶',
      items: [
        {
          text: 'Typescript',
          link: '/column/frontEnd/ts'
        },
        {
          text: 'Less',
          link: '/column/frontEnd/less'
        }
      ]
    }
  ]
};