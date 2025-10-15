import { defineStore } from "pinia"

export const useAudioStateStore = defineStore("audioStateStore",() => {
    let dataArray!: Uint8Array<ArrayBuffer>
    let analyser!: AnalyserNode
    let source!: MediaElementAudioSourceNode
    let audCtx!: AudioContext
    let isAnalysed: boolean = false
    return { dataArray,analyser,source,audCtx,isAnalysed }
})