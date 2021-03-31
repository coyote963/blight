import React, { useCallback, useEffect, useRef } from 'react'
import {gmcToHsl} from '../helpers/gmcToHsl';

interface PropType {
    hat: string;
    color: string;
}
const SHIFT = -10
export function PlayerView(props: PropType) {
    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    const draw = useCallback((ctx : CanvasRenderingContext2D, width: number) => {
        var playerImage = new Image();
        var hatImage = new Image();
        playerImage.onload = () => {
            ctx.drawImage(playerImage,width/2 - SHIFT,0);
            const [h,s,l] = gmcToHsl(props.color)
            ctx.fillStyle = `hsl(${h*360},${s*100}%,${l*100}%)`;
            ctx.globalCompositeOperation = "multiply";
            ctx.fillRect(0,0,300,300);
            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(playerImage, width/2 - SHIFT , 0 )
            ctx.globalCompositeOperation = "source-over";
            hatImage.src = `/misc/image_1_${Number(props.hat) + 1}.png`
        }
        hatImage.onload = () => {
            ctx.drawImage(hatImage, (width/2)-13-SHIFT, -13);
        }
        playerImage.src = "/misc/boringman.png"
    }, [props])

    
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d')
            
            draw(context!, canvasRef.current.width)
        }
        
    }, [draw])
    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}