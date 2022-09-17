import {buildTree} from './buildTree';

describe.only('buildTree', () => {
  it('should build tree with same directory names and other types', () => {
    const NODES = {
      dir1: {
        path: 'root/dir1',
        isDirectory: true,
        type: 'add' as const,
      },
      dir2: {
        path: 'root/dir1',
        isDirectory: true,
        type: 'copy' as const,
      },
      file1: {
        path: 'root/dir1/file1',
        isDirectory: false,
        type: 'delete' as const,
      },
    };

    const NODE_IDS = ['dir1', 'dir2', 'file1'];

    expect(buildTree(NODE_IDS, NODES)).toEqual([
      {
        name: 'root',
        nodes: ['dir1', 'dir2', 'file1'],
        isDirectory: true,
        children: [
          {
            name: 'dir1',
            id: 'dir1',
            nodes: ['dir1'],
            isDirectory: true,
            children: [],
          },
          {
            name: 'dir1',
            id: 'dir2',
            nodes: ['dir2', 'file1'],
            isDirectory: true,
            children: [
              {
                id: 'file1',
                name: 'file1',
                nodes: ['file1'],
                isDirectory: false,
                children: [],
              },
            ],
          },
        ],
      },
    ]);
  });

  it('should build tree with same directory names and other types and same direcroty and another root', () => {
    const NODES = {
      dir1: {
        path: 'root/dir/dir1',
        isDirectory: true,
        type: 'add' as const,
      },
      dir2: {
        path: 'root/dir/dir1',
        isDirectory: true,
        type: 'copy' as const,
      },
      file1: {
        path: 'root/dir/dir1/file1',
        isDirectory: false,
        type: 'delete' as const,
      },
      dir3: {
        path: 'root2/dir/dir1',
        isDirectory: true,
        type: 'copy' as const,
      },
    };

    const NODE_IDS = ['dir1', 'dir2', 'file1', 'dir3'];

    expect(buildTree(NODE_IDS, NODES)).toEqual([
      {
        name: 'root',
        nodes: ['dir1', 'dir2', 'file1'],
        isDirectory: true,
        children: [
          {
            name: 'dir',
            nodes: ['dir1', 'dir2', 'file1'],
            isDirectory: true,
            children: [
              {
                name: 'dir1',
                id: 'dir1',
                nodes: ['dir1'],
                isDirectory: true,
                children: [],
              },
              {
                name: 'dir1',
                id: 'dir2',
                nodes: ['dir2', 'file1'],
                isDirectory: true,
                children: [
                  {
                    id: 'file1',
                    name: 'file1',
                    nodes: ['file1'],
                    isDirectory: false,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'root2',
        nodes: ['dir3'],
        isDirectory: true,
        children: [
          {
            name: 'dir',
            nodes: ['dir3'],
            isDirectory: true,
            children: [
              {
                name: 'dir1',
                id: 'dir3',
                nodes: ['dir3'],
                isDirectory: true,
                children: [],
              },
            ],
          },
        ],
      },
    ]);
  });
});
