import { dxText } from "../dx/text";

export default function Fluid(props: {text: string}) {
	return <p class={dxText('fluid-paragraph-01', 'text-neutral-12 mt-6')}>
		{props.text}
	</p>
}