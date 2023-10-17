import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZhCN: NavbarConfig = [
    {
        text: '入门',
        link: '/start/'
    },
    {
        text: '数据整理',
        link: '/data/'
    },
    {
        text: '数据导入',
        link: '/import/'
    },
    {
        text: '功能',
        link: '/functions/'
    },
    {
        text: '输出',
        children: [
            {
                text: '数据输出',
                link: '/outputs/'
            },
        ]
    },
    {
        text: '售后',
        children: [
            {
                text: 'QQ 26065765',
                link: ''
            },
            {
                text: '微信 15907194551',
                link: ''
            },
               ]
    }
]