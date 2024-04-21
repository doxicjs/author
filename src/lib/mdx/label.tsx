import { dxText } from "../dx/text";

export default function Label(props: {text: string}) {
	return <p class={dxText("body-02", "text-primary-12")}>
		{props.text}
	</p>
}