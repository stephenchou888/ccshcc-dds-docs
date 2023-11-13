import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZhCN: NavbarConfig = [
    {
        text: '入门提要',
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
        text: '功能使用',
        link: '/functions/'
    },
    {
        text: '数据输出',
        children: [
            {
                text: '数据输出',
                link: '/outputs/'
            },
        ]
    },
    {
        text: '更新下载',
        children: [
            {
                text: '软件更新地址',
                link: '/download/'
            },
        ]
    },
    {
        text: 'Tips',
        children: [
            {
                text: '软件使用问答',
                link: '/tips/'
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