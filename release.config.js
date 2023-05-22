module.exports = {
    "branches": ["master"],
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "releaseRules": [
                // there are only devDependencies in this repo
                {"type": "chore", "scope": "deps", "release": false}
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        ["@semantic-release/npm", {
            "tarballDir": "release"
        }],
        "@semantic-release/git"
    ],
    "preset": "angular"
};
