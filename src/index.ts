import Viewer from "viewerjs"

/**
 * @param image An image or a group of images.
 * @param options The options of the viewer.
 */
export function preview(image: string | string[], options?: Viewer.Options): void
/**
 * @param image A group of images.
 * @param indexOrSrc The index of the picture or the src to be displayed.
 * @param options The options of the viewer.
 */
export function preview(image: string[], indexOrSrc: number | string, options?: Viewer.Options): void
/**
 * @param image An image or a group of images.
 * @param indexOrSrcOrOptions The index of the picture to be displayed or the options of the viewer.
 * @param options The options of the viewer.
 */
export function preview(image: string | string[], indexOrSrcOrOptions?: number | string | Viewer.Options, options?: Viewer.Options) {
    if (image.length === 0) return
    const wrapper = document.createElement("div")
    wrapper.style.display = "none"
    const images = Array.isArray(image) ? image : [image]
    const imageEles = images.map(src => {
        const img = document.createElement("img")
        img.src = src
        wrapper.appendChild(img)
        return img
    })
    let viewer: Viewer
    let finalOptions: Viewer.Options
    if (typeof image === "string") {
        finalOptions = { navbar: false, ...options }
    } else {
        finalOptions = { ...(typeof indexOrSrcOrOptions === "object" ? indexOrSrcOrOptions : options) }
    }
    const { hidden } = finalOptions
    finalOptions.hidden = function (e) {
        hidden?.(e)
        viewer.destroy()
    }
    viewer = new Viewer(wrapper, finalOptions)
    let index = typeof indexOrSrcOrOptions === "number" ? indexOrSrcOrOptions : typeof indexOrSrcOrOptions === "string" ? images.indexOf(indexOrSrcOrOptions) : 0
    if (!Number.isInteger(index) || index < 0 || index >= images.length) index = 0
    imageEles[index].click()
}

export default preview
