# TechTalent API - Backend
This is the core engine of the TechTalent Hub, built with a focus on type safety, data integrity, and modular scalability. It handles the persistence of candidate data and provides a documented interface for frontend consumption.

## Tech Tools
- Node.js 24.13.0
- NestJS (Modular Architecture)
- Prisma 7.3.0 (ORM)
- PostgreSQL 15 (Database)
- Class-Validator & Transformer (DTO Validation)
- Swagger/OpenAPI (Documentation)

## Key Features
- Automated Documentation: Interactive API documentation via Swagger.
- Strict Validation: Entry point security using DTOs and global pipes.
- Database Migrations: Version-controlled database schema management via Prisma.
- Containerized DB: Zero-config local database setup using Docker.

## API Documentation
Once the server is running, you can access the interactive Swagger UI at: `http://localhost:3000/api`