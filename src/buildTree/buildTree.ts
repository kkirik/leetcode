export interface TreeNode {
  name: string;
  nodes: string[];
  children: TreeNode[];
  isDirectory: boolean;
  id?: string;
}

interface Collection {
  path: string;
  isDirectory: boolean;
  type: 'add' | 'delete' | 'copy';
}

export function buildTree(
  nodes: string[] = [],
  collection: Record<string, Collection> = {}
): TreeNode[] {
  let tree: TreeNode[] = [];
  const nodeCollection: Record<string, TreeNode> = {};

  nodes.forEach((nodeId) => {
    const {path = '', isDirectory = false} = collection[nodeId] || {};
    const pathParts = path.split('/').filter(Boolean);

    let currentLevel: TreeNode[] = tree;
    let nodeHash = '';

    pathParts.forEach((nodeName, index) => {
      const isLastNode = index === pathParts.length - 1;
      const isDirectoryNode = !isLastNode || isDirectory;

      nodeHash = isDirectoryNode ? `${nodeHash}:${nodeName}` : nodeId;

      const existedNode = nodeCollection[nodeHash];

      if (!existedNode || (isLastNode && isDirectory)) {
        const newNode: TreeNode = {
          name: nodeName,
          nodes: [nodeId],
          children: [],
          isDirectory: isDirectoryNode,
        };

        if (isLastNode) {
          newNode.id = nodeId;
        }

        nodeCollection[nodeHash] = newNode;
        currentLevel.push(newNode);

        currentLevel = newNode.children;

        return;
      }

      if (existedNode && !isLastNode) {
        existedNode.nodes.push(nodeId);
        currentLevel = existedNode.children;
      }
    });
  });

  return tree;
}
