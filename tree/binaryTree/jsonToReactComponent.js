// JSON -> React component
const { Tree } = test; // replace test with actual tree component

const { TreeNode } = Tree;

const json = [
	{
		title: '1',
		key: '1',
		children: [{ title: '3', key: '3', children: [{ title: '5', key: '5', children: [] }] }],
	},
	{
		title: '2',
		key: '2',
		children: [{ title: '4', key: '4', children: [] }],
	},
];

class Demo extends React.Component {
	dfs = (n) => {
		return (
			<TreeNode title={n.title} key={n.key}>
				{n.children.map(this.dfs)}
			</TreeNode>
		);
	};
	render() {
		return <Tree>{json.map(this.dfs)}</Tree>;
	}
}
