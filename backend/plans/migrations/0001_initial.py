# Generated by Django 3.2.8 on 2021-10-26 14:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('destination_name', models.CharField(max_length=250)),
                ('description', models.CharField(max_length=255)),
                ('url_img', models.URLField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='PhotosPlans',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_img', models.CharField(max_length=255)),
                ('url_img', models.URLField(max_length=255)),
                ('id_plans', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='plans.plan')),
            ],
        ),
    ]
