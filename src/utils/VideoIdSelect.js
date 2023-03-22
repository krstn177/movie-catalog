const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/img;
export const VideoIdSelect = (url) => {
    let result = "";  
    const matches = url.matchAll(youtubeRegex);
    for (const match of matches) {       
        result = match[6];
    }
    return result;
}