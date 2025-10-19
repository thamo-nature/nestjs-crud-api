"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1760902750147 = void 0;
class CreateUserTable1760902750147 {
    name = 'CreateUserTable1760902750147';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.CreateUserTable1760902750147 = CreateUserTable1760902750147;
//# sourceMappingURL=1760902750147-CreateUserTable.js.map