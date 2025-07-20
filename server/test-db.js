// Simple database connection test script
// Run this to verify your PostgreSQL connection is working

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'leave_app',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

async function testConnection() {
  try {
    console.log('🔌 Testing database connection...');
    
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL database successfully!');
    
    // Test query
    const result = await client.query('SELECT NOW()');
    console.log('📅 Current database time:', result.rows[0].now);
    
    // Check if users table exists
    const tableCheck = await client.query(
      "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users')"
    );
    
    if (tableCheck.rows[0].exists) {
      console.log('✅ Users table exists');
      
      // Count users
      const userCount = await client.query('SELECT COUNT(*) FROM users');
      console.log(`👥 Number of users in database: ${userCount.rows[0].count}`);
    } else {
      console.log('⚠️  Users table does not exist. Please run the database.sql script.');
    }
    
    client.release();
    console.log('🎉 Database test completed successfully!');
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Make sure PostgreSQL is running');
    console.log('2. Check your database credentials in .env file');
    console.log('3. Ensure the database "leave_app" exists');
    console.log('4. Run the database.sql script to create tables');
  } finally {
    await pool.end();
  }
}

testConnection();
