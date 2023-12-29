import Viewer from "viewerjs"
import "viewerjs/dist/viewer.css"

export { Viewer }

export type ViewerOptions = Viewer.Options

/**
 * @param image An image or a group of images.
 * @param options The options of the viewer.
 */
export function view(image: string | string[], options?: ViewerOptions): void
/**
 * @param image A group of images.
 * @param indexOrSrc The index of the picture or the src to be displayed.
 * @param options The options of the viewer.
 */
export function view(image: string[], indexOrSrc: number | string, options?: ViewerOptions): void
/**
 * @param image An image or a group of images.
 * @param indexOrSrcOrOptions The index of the picture to be displayed or the options of the viewer.
 * @param options The options of the viewer.
 */
export function view(image: string | string[], indexOrSrcOrOptions?: number | string | ViewerOptions, options?: ViewerOptions) {
    if (image.length === 0) return
    const container = document.createElement("div")
    const images = Array.isArray(image) ? image : [image]
    images.forEach(src => {
        const img = document.createElement("img")
        img.src = src
        container.appendChild(img)
    })
    let viewer: Viewer
    let finalOptions: ViewerOptions
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
    viewer = new Viewer(container, finalOptions)
    let index = typeof indexOrSrcOrOptions === "number" ? indexOrSrcOrOptions : typeof indexOrSrcOrOptions === "string" ? images.indexOf(indexOrSrcOrOptions) : 0
    if (!Number.isInteger(index) || index < 0 || index >= images.length) {
        console.warn("The index is invalid and has been set to 0")
        index = 0
    }
    viewer.view(index)
}

export default view
