## Get Started With AWS

1. Make an account
2. Install AWS Command Line Interface [CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
    1. Check with `which aws`
    2. `aws —version`
3. Go to top right “Account”
    1. IAM User and Role Access to Billing Information
    2. Check Activate IAM Access
4. Add user
    1. Look up IAM in services
    2. Go to User and Add User
    3. Name it Administrator
    4. Select Password - AWS Management Console access
    5. Click next
5. Create group
    1. Call it Administrators
    2. Check Administrator Access Box
    3. Click though and create user
6. Create user access key
    1. Click on the Administrator user
    2. Go to Security Credentials
    3. Click Create Access Key and download csv or screenshot
7. Configure aws CLI
    1. `aws configure` in shell
    2. Put in inputs: key, access key, location (us-east-2), output (json)

---
## Launch EC2 Instance and ssh

1. Go to EC2
2. Launch Instance
    1. Amazon Machine Image (AMI) search deep learning
    2. Instance type (t2.micro, g4dn.xlarge for GPU instance)
    3. Configure storage
    4. Create new key-pair if not have,
    5. Launch
3. `aws ec2 describe-instances`
4. find Public IPv4 DNS of instance
5. `ssh -i /path/to/pem-key-pair public-dns` (e.g. ubuntu@ec2(instance id).us-east-2.compute.amazonaws.com
6. `chmod 600 ~/.ssh/key-pair.pem` if permission issues
7. 

---
## Instance to GPU
1. Select the instance
2. Actions -> Instance settings -> change instance type
3. Request resources
    1. Support center
    2. Create case
    3. Service level increase
    4. Limit type = EC2 Instances
    5. 

---
## Create a public S3 bucket
1. Get data from bucket, share from bucket

---
## tmux to keep process running