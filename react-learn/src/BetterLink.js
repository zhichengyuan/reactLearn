import React from 'react'
import {Link} from 'react-router-dom'
import routeConfig from './routeConfig'

export default function BetterLink({to,...rest}) {
    if(to.name && typeof to !== 'string') {
        to.pathname = getPathFromName(to.name,"/",routeConfig);
        if(to.pathname === undefined) {
            throw new Error(`name属性值${to.name}无效`)
        }
    }
    return <Link {...rest} to={to} />
}

/**
 * 根据name的值，查找对应的path，没有考虑有params的情况
 * 如果有，会比较复杂，需要用到第三方库path-to-retexp
 * @param {*} name 
 * @param {*} baseUrl 
 */
function getPathFromName(name,baseUrl,rotesArr) {
    for(const item of rotesArr){
        let newPath = baseUrl + item.path;
        newPath = newPath.replace(/\/\//g,"/")
        if(item.name === name) {
            return newPath;
        }
        else {
            if(Array.isArray(item.children)) {
                const path = getPathFromName(name,newPath,item.children);
                if(path !== undefined) {
                    return path;
                }
                
            }
        }
    }
}