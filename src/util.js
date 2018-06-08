export function getRedirectPath({type, avatar}){
    //根据用户信息 返回跳转地址
    // user.type /boss /genius
    let url = (type == 'boss')?'/boss':'/genius'
    // user.avatar /bossinfo /geniusinfo
    if(!avatar){
        url += 'info'
    }
    return url
}